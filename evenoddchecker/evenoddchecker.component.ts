import { Component } from '@angular/core';

@Component({
  selector: 'app-evenoddchecker',
  templateUrl: './evenoddchecker.component.html',
  styleUrls: ['./evenoddchecker.component.css']
})
export class EvenoddcheckerComponent {
  inputNumber: number | null = null;  // Holds the user's input number
  result: string | null = null;  // Holds the result (even or odd)

  // Method to check if the input number is even or odd
  checkEvenOdd(): void {
    if (this.inputNumber !== null) {
      if (this.inputNumber % 2 === 0) {
        this.result = `${this.inputNumber} is Even`;
      } else {
        this.result = `${this.inputNumber} is Odd`;
      }
    } else {
      this.result = null;
    }
  }
}
