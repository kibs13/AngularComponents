import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Sample stats data for the dashboard cards
  stats = [
    { title: 'Total Users', value: 1500, link: '/users' },
    { title: 'Total Sales', value: '$12,000', link: '/sales' },
    { title: 'Orders', value: 320, link: '/orders' },
    { title: 'Revenue', value: '$24,500', link: '/revenue' }
  ];

  // Sample data for the table
  data = [
    { name: 'Item 1', value: 150 },
    { name: 'Item 2', value: 300 },
    { name: 'Item 3', value: 450 },
    { name: 'Item 4', value: 600 }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  // Method to navigate to detail pages
  viewDetails(link: string) {
    this.router.navigate([link]);
  }
}
