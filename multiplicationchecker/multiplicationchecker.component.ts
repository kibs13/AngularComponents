import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationchecker',
  templateUrl: './multiplicationchecker.component.html',
  styleUrls: ['./multiplicationchecker.component.css']
})
export class MultiplicationcheckerComponent {
  number: number | null = null;        // Holds the first number
  multipleOf: number | null = null;    // Holds the second number
  resultMessage: string | null = null;  // Stores the result message

  // Method to check if 'number' is a multiple of 'multipleOf'
  checkMultiple(): void {
    if (this.number !== null && this.multipleOf !== null && this.multipleOf !== 0) {
      if (this.number % this.multipleOf === 0) {
        this.resultMessage = `${this.number} is a multiple of ${this.multipleOf}.`;
      } else {
        this.resultMessage = `${this.number} is not a multiple of ${this.multipleOf}.`;
      }
    } else {
      this.resultMessage = "Please enter valid numbers and ensure the second number is not zero.";
    }
  }
}
