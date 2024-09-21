import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatureconverter',
  templateUrl: './temperatureconverter.component.html',
  styleUrls: ['./temperatureconverter.component.css']
})
export class TemperatureconverterComponent {
  celsius: number | null = null;         // Input for Celsius
  fahrenheit: number | null = null;      // Converted Fahrenheit value
  fahrenheitInput: number | null = null; // Input for Fahrenheit
  convertedCelsius: number | null = null; // Converted Celsius value

  // Convert Celsius to Fahrenheit
  convertToFahrenheit(): void {
    if (this.celsius !== null) {
      this.fahrenheit = (this.celsius * 9 / 5) + 32;
    }
  }

  // Convert Fahrenheit to Celsius
  convertToCelsius(): void {
    if (this.fahrenheitInput !== null) {
      this.convertedCelsius = (this.fahrenheitInput - 32) * 5 / 9;
    }
  }
}
