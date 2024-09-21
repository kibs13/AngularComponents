import { Component } from '@angular/core';

@Component({
  selector: 'app-interestcalculator',
  templateUrl: './interestcalculator.component.html',
  styleUrls: ['./interestcalculator.component.css']
})
export class InterestcalculatorComponent {
  principal: number | null = null;  // Holds the principal amount
  rate: number | null = null;        // Holds the rate of interest
  time: number | null = null;        // Holds the time in years
  interest: number | null = null;    // Stores the calculated simple interest

  // Method to calculate simple interest
  calculateInterest(): void {
    if (this.principal !== null && this.rate !== null && this.time !== null) {
      this.interest = (this.principal * this.rate * this.time) / 100; // Simple Interest formula
    } else {
      this.interest = null; // Reset if inputs are invalid
    }
  }
}
