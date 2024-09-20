import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyconverter',
  templateUrl: './currencyconverter.component.html',
  styleUrls: ['./currencyconverter.component.css']
})
export class CurrencyconverterComponent {
  usdAmount: number | null = null;  // Holds the USD amount input by the user
  convertedAmount: number | null = null;  // Holds the converted PHP amount
  exchangeRate: number = 56;  // 1 USD = 56 PHP (fixed exchange rate)

  // Method to convert USD to PHP
  convertToPHP(): void {
    if (this.usdAmount !== null) {
      this.convertedAmount = this.usdAmount * this.exchangeRate;
    } else {
      this.convertedAmount = null;
    }
  }
}
