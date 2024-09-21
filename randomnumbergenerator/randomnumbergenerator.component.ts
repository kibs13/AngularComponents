import { Component } from '@angular/core';

@Component({
  selector: 'app-randomnumbergenerator',
  templateUrl: './randomnumbergenerator.component.html',
  styleUrls: ['./randomnumbergenerator.component.css']
})
export class RandomnumbergeneratorComponent {
  minValue: number | null = null;  // Holds the minimum value
  maxValue: number | null = null;  // Holds the maximum value
  randomNumber: number | null = null;  // Stores the generated random number

  // Method to generate a random number within the specified range
  generateRandomNumber(): void {
    if (this.minValue !== null && this.maxValue !== null && this.minValue < this.maxValue) {
      this.randomNumber = Math.floor(Math.random() * (this.maxValue - this.minValue + 1)) + this.minValue;
    } else {
      this.randomNumber = null;  // Reset if the inputs are invalid
    }
  }
}
