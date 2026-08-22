import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {
  selectedFrontend = 'Angular';
  selectedBackend = 'Spring Boot';
  selectedDb = 'MySQL';

  isGenerating = false;
  isCompleted = false;
  progressValue = 0;
  currentStatus = 'Initializing project structure...';

  selectTech(category: string, value: string) {
    if (category === 'frontend') this.selectedFrontend = value;
    if (category === 'backend') this.selectedBackend = value;
    if (category === 'db') this.selectedDb = value;
  }

  startGeneration() {
    this.isGenerating = true;
    this.progressValue = 10;
    
    setTimeout(() => {
      this.progressValue = 40;
      this.currentStatus = `Compiling ${this.selectedFrontend} components & UI layout...`;
    }, 1200);

    setTimeout(() => {
      this.progressValue = 75;
      this.currentStatus = `Configuring ${this.selectedBackend} REST controllers & ${this.selectedDb} database schema...`;
    }, 2800);

    setTimeout(() => {
      this.progressValue = 100;
      this.isGenerating = false;
      this.isCompleted = true;
    }, 4200);
  }

  downloadCode() {
    alert('📥 Downloading full-stack project ZIP bundle...');
  }

  resetApp() {
    this.isCompleted = false;
    this.progressValue = 0;
  }
}