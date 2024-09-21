import { Component } from '@angular/core';

@Component({
  selector: 'app-usernamevalidator',
  templateUrl: './usernamevalidator.component.html',
  styleUrls: ['./usernamevalidator.component.css']
})
export class UsernamevalidatorComponent {
  username: string = '';                // Holds the user's input username
  validationMessage: string | null = null; // Stores the validation result message

  // Method to validate the username
  validateUsername(): void {
    const usernamePattern = /^[A-Za-z][A-Za-z0-9]{2,14}$/; // Must start with a letter and be 3-15 characters long

    if (usernamePattern.test(this.username)) {
      this.validationMessage = "Username is valid.";
    } else {
      this.validationMessage = "Invalid username. It must be 3-15 characters long, start with a letter, and contain only letters and numbers.";
    }
  }
}
