import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent implements OnInit {
  userName: string = '';
  isLoggedIn: boolean = false;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.checkUserSession();
    this.router.events.subscribe(() => {
      this.checkUserSession();
    });
  }

  checkUserSession() {
    // Check if running in browser before accessing localStorage
    if (isPlatformBrowser(this.platformId)) {
      const storedName = localStorage.getItem('userName');
      if (storedName) {
        this.userName = storedName;
        this.isLoggedIn = true;
      } else {
        this.userName = '';
        this.isLoggedIn = false;
      }
    }
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('userName');
      localStorage.removeItem('userEmail');
    }
    this.isLoggedIn = false;
    this.userName = '';
    this.router.navigate(['/auth']);
  }
}