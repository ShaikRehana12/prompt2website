import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css'
})
export class AuthComponent {
  
  constructor(private router: Router) {}

  onLogin(event: Event) {
    event.preventDefault();
    // Perform authentication logic here, then redirect:
    this.router.navigate(['/dashboard']);
  }
}