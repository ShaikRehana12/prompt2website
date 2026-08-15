import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',    // Changed from dashboard.component.html
  styleUrl: './dashboard.css',        // Changed from dashboard.component.css
})
export class DashboardComponent {}