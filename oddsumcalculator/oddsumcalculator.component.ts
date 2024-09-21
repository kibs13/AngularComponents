import { Component } from '@angular/core';

@Component({
  selector: 'app-oddsumcalculator',
  templateUrl: './oddsumcalculator.component.html',
  styleUrls: ['./oddsumcalculator.component.css']
})
export class OddsumcalculatorComponent {
  number: number | null = null;       // Holds the user input number
  oddSum: number | null = null;       // Stores the calculated sum of odd numbers

  // Method to calculate the sum of odd numbers
  calculateOddSum(): void {
    this.oddSum = 0; // Reset the sum
    if (this.number && this.number > 0) {
      for (let i = 1; i <= this.number; i++) {
        if (i % 2 !== 0) {
          this.oddSum += i; // Add only odd numbers
        }
      }
    }
  }
}
