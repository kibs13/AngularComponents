import { Component } from '@angular/core';

@Component({
  selector: 'app-simplelogin',
  templateUrl: './simplelogin.component.html',
  styleUrls: ['./simplelogin.component.css']
})
export class SimpleloginComponent {
  loginData = {
    email: '',
    password: ''
  };

  submitted: boolean = false;

  // Method to handle form submission
  onSubmit(): void {
    this.submitted = true;
  }
}

