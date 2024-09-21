import { Component } from '@angular/core';

interface Weather {
  temperature: number;
  condition: string;
  city: string;
}

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']  // Optional for styles
})
export class WeatherWidgetComponent {
  weather: Weather = {
    temperature: 24,  // Example temperature in Celsius
    condition: 'Sunny',  // Example weather condition
    city: 'Caloocan City'  // Example city
  };

  getWeatherInfo() {
    // In a real application, you would fetch weather data from an API here
    // For this example, we are using hardcoded values
    return this.weather;
  }
}
