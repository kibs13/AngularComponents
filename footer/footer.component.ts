import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']  // Optional for styles
})
export class FooterComponent {
  year: number = new Date().getFullYear();
  links = [
    { label: 'Privacy Policy', url: '/privacy' },
    { label: 'Terms of Service', url: '/terms' },
    { label: 'Contact Us', url: '/contact' }
  ];
}
