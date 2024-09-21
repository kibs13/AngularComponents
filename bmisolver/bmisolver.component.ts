import { Component } from '@angular/core';

@Component({
  selector: 'app-bmisolver',
  templateUrl: './bmisolver.component.html',
  styleUrls: ['./bmisolver.component.css']
})
export class BmisolverComponent {
  height: number | null = null;  // Holds the height in meters
  weight: number | null = null;    // Holds the weight in kilograms
  bmi: number | null = null;       // Stores the calculated BMI

  // Method to calculate BMI
  calculateBMI(): void {
    if (this.height && this.weight) {
      this.bmi = this.weight / (this.height * this.height);
    } else {
      this.bmi = null; // Reset if inputs are invalid
    }
  }
}
