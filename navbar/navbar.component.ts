import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isNavbarCollapsed = true;

  constructor(private router: Router) {}

  // Function to toggle navbar collapse on mobile
  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  // Optional: A method to navigate programmatically
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
