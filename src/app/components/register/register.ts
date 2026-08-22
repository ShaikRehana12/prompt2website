import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {
  constructor(private router: Router) {}

  onRegister(event: Event) {
    event.preventDefault();
    // After registration success, redirect to dashboard or login
    this.router.navigate(['/dashboard']);
  }
}