import { Component } from '@angular/core';

@Component({
  selector: 'app-fibonaccigenerator',
  templateUrl: './fibonaccigenerator.component.html',
  styleUrls: ['./fibonaccigenerator.component.css']
})
export class FibonaccigeneratorComponent {
  number: number | null = null;                // Holds the user input number N
  fibonacciNumbers: number[] = [];             // Stores the generated Fibonacci numbers

  // Method to generate Fibonacci numbers
  generateFibonacci(): void {
    this.fibonacciNumbers = []; // Reset the array
    if (this.number && this.number > 0) {
      let a = 0, b = 1;
      for (let i = 0; i < this.number; i++) {
        this.fibonacciNumbers.push(a);
        [a, b] = [b, a + b]; // Update a and b to the next Fibonacci numbers
      }
    }
  }
}
