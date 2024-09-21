import { Component } from '@angular/core';

@Component({
  selector: 'app-factorialcalculator',
  templateUrl: './factorialcalculator.component.html',
  styleUrls: ['./factorialcalculator.component.css']
})
export class FactorialcalculatorComponent {
  inputNumber: number | null = null;   // Holds the input number
  factorialResult: number | null = null;  // Stores the calculated factorial

  // Method to calculate the factorial of a number
  calculateFactorial(): void {
    if (this.inputNumber !== null && this.inputNumber >= 0) {
      this.factorialResult = this.factorial(this.inputNumber);
    } else {
      this.factorialResult = null;  // Reset if input is invalid
    }
  }

  // Helper method to calculate factorial using recursion
  factorial(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * this.factorial(n - 1);
  }
}
