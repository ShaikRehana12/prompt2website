import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth'; // Adjust to './components/auth/auth.component' if using that naming convention
import { DashboardComponent } from './components/dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'dashboard', component: DashboardComponent }
];