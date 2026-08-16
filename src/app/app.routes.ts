import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';
import { DashboardComponent } from './components/dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: LoginComponent },            // Default Landing (Sign In)
  { path: 'register', component: RegisterComponent },  // Create Account page
  { path: 'dashboard', component: DashboardComponent }// Main Generator Dashboard
];