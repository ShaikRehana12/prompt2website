import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {
  // Declare these state variables so the HTML can read them
  selectedFrontend: string = 'Angular';
  selectedBackend: string = 'Spring Boot';
  selectedDb: string = 'H2';
  userPrompt: string = '';

  isGenerating: boolean = false;
  isCompleted: boolean = false;
  currentStatus: string = 'Initializing code compiler...';
  progressValue: number = 0;
  generatedResult: any = null;

  constructor(private http: HttpClient) {}

  selectTech(type: string, value: string) {
    if (type === 'frontend') this.selectedFrontend = value;
    if (type === 'backend') this.selectedBackend = value;
    if (type === 'db') this.selectedDb = value;
  }

  startGeneration() {
    if (!this.userPrompt.trim()) {
      alert('Please enter a project prompt description!');
      return;
    }

    this.isGenerating = true;
    this.progressValue = 30;
    this.currentStatus = 'Sending architecture requirements to Spring Boot backend...';

    const payload = {
      prompt: this.userPrompt,
      frontend: this.selectedFrontend,
      backend: this.selectedBackend,
      database: this.selectedDb
    };

    this.http.post('http://localhost:8081/api/generate', payload).subscribe({
      next: (response: any) => {
        this.generatedResult = response;
        this.progressValue = 100;
        this.currentStatus = 'Build complete!';
        
        setTimeout(() => {
          this.isGenerating = false;
          this.isCompleted = true;
        }, 1000);
      },
      error: (err) => {
        console.error('Generation failed', err);
        alert('Failed to connect to backend server on port 8081.');
        this.isGenerating = false;
        this.progressValue = 0;
      }
    });
  }

  downloadCode() {
    alert('Source code bundle download triggered!');
  }

  resetApp() {
    this.isCompleted = false;
    this.userPrompt = '';
    this.progressValue = 0;
    this.generatedResult = null;
  }
}