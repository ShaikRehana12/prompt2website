import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth.html', // or auth.component.html
  styleUrl: './auth.css'    // or auth.component.css
})
export class AuthComponent {  // <-- Make sure it is exported as AuthComponent
  // component logic here
}