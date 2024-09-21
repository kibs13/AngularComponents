import { Component } from '@angular/core';

@Component({
  selector: 'app-divisiblechecker',
  templateUrl: './divisiblechecker.component.html',
  styleUrls: ['./divisiblechecker.component.css']
})
export class DivisiblecheckerComponent {
  firstNumber: number | null = null;  // Holds the first input number
  secondNumber: number | null = null; // Holds the second input number
  isDivisible: boolean | null = null; // Holds the result of divisibility check

  // Method to check if the first number is divisible by the second
  checkDivisibility(): void {
    if (this.firstNumber !== null && this.secondNumber !== null && this.secondNumber !== 0) {
      this.isDivisible = this.firstNumber % this.secondNumber === 0;
    } else {
      this.isDivisible = null; // Reset result if input is invalid
    }
  }
}
