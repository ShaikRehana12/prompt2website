import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css'
})
export class AuthComponent {
  isSignUpMode: boolean = false;
  authStep: 'FORM' | 'OTP' = 'FORM';
  
  formData = {
    name: '',
    email: '',
    password: ''
  };

  enteredOtp: string = '';
  mockServerOtp: string = '';

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  toggleMode() {
    this.isSignUpMode = !this.isSignUpMode;
    this.authStep = 'FORM';
  }

  onSubmit(event: Event) {
    event.preventDefault();

    if (!this.formData.email || !this.formData.password) {
      alert('Please fill in all required fields.');
      return;
    }

    if (isPlatformBrowser(this.platformId)) {
      const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');

      if (this.isSignUpMode) {
        if (!this.formData.name) {
          alert('Please provide your name.');
          return;
        }

        const existingUser = users.find((u: any) => u.email === this.formData.email);
        if (existingUser) {
          alert('An account with this email already exists. Please sign in instead.');
          this.isSignUpMode = false;
          return;
        }

        // Generate a 6-digit mock OTP for verification
        this.mockServerOtp = Math.floor(100000 + Math.random() * 900000).toString();
        
        // In a real-world app, this triggers an API to send an email. For testing, we alert it:
        alert(`[Simulated Email Sent] Your verification OTP code is: ${this.mockServerOtp}`);
        
        // Move to OTP verification step
        this.authStep = 'OTP';

      } else {
        const foundUser = users.find((u: any) => u.email === this.formData.email && u.password === this.formData.password);

        if (!foundUser) {
          const createNew = confirm('This email is not registered or the password is incorrect. Would you like to create an account with this email?');
          if (createNew) {
            this.isSignUpMode = true;
          }
          return;
        }

        localStorage.setItem('userName', foundUser.name);
        localStorage.setItem('userEmail', foundUser.email);
        this.router.navigate(['/dashboard']);
      }
    }
  }

  verifyOtp(event: Event) {
    event.preventDefault();

    if (this.enteredOtp === this.mockServerOtp) {
      if (isPlatformBrowser(this.platformId)) {
        const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        users.push({ 
          name: this.formData.name, 
          email: this.formData.email, 
          password: this.formData.password 
        });
        localStorage.setItem('registeredUsers', JSON.stringify(users));

        localStorage.setItem('userName', this.formData.name);
        localStorage.setItem('userEmail', this.formData.email);
        
        alert('Email verified successfully! Welcome aboard.');
        this.router.navigate(['/dashboard']);
      }
    } else {
      alert('Invalid OTP code. Please enter the correct 6-digit code.');
    }
  }
}