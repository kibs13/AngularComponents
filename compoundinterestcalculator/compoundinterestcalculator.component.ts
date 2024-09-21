import { Component } from '@angular/core';

@Component({
  selector: 'app-compoundinterestcalculator',
  templateUrl: './compoundinterestcalculator.component.html',
  styleUrls: ['./compoundinterestcalculator.component.css']
})
export class CompoundinterestcalculatorComponent {
  principal: number | null = null;       // Holds the principal amount
  rate: number | null = null;             // Holds the rate of interest
  time: number | null = null;             // Holds the time in years
  frequency: number = 1;                  // Frequency of compounding
  compoundInterest: number | null = null; // Stores the calculated compound interest
  totalAmount: number | null = null;      // Stores the total amount after interest

  // Method to calculate compound interest
  calculateCompoundInterest(): void {
    if (this.principal !== null && this.rate !== null && this.time !== null) {
      const r = this.rate / 100; // Convert percentage to decimal
      const n = this.frequency;    // Compounding frequency
      this.totalAmount = this.principal * Math.pow((1 + r / n), n * this.time); // Total amount after interest
      this.compoundInterest = this.totalAmount - this.principal; // Calculate compound interest
    } else {
      this.compoundInterest = null; // Reset if inputs are invalid
      this.totalAmount = null;
    }
  }
}

