import { Component } from '@angular/core';

@Component({
  selector: 'app-fahrenheittocelsius',
  templateUrl: './fahrenheittocelsius.component.html',
  styleUrls: ['./fahrenheittocelsius.component.css']
})
export class FahrenheittocelsiusComponent {
  fahrenheit: number | null = null;  // Holds the input Fahrenheit value
  celsius: number | null = null;     // Holds the converted Celsius value

  // Method to convert Fahrenheit to Celsius
  convertToCelsius(): void {
    if (this.fahrenheit !== null) {
      this.celsius = (this.fahrenheit - 32) * 5 / 9;
    }
  }
}
