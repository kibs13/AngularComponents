import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyformatter',
  templateUrl: './currencyformatter.component.html',
  styleUrls: ['./currencyformatter.component.css']
})
export class CurrencyformatterComponent {
  amount: number | null = null; // User input number
  selectedCurrency: string = 'USD'; // Default selected currency is Dollar
  formattedCurrency: string | null = null; // Formatted currency result

  // Conversion rates (assuming static values for example purposes)
  conversionRates: any = {
    'USD': 1,        // Dollar
    'PHP': 56,       // Philippine Peso
    'EUR': 0.94      // Euro (approximate, for real-world usage, consider using an API)
  };

  // Method to format number as currency
  formatCurrency(): void {
    if (this.amount !== null) {
      const conversionRate = this.conversionRates[this.selectedCurrency];
      const formatted = this.amount * conversionRate;

      // Formatting based on selected currency
      if (this.selectedCurrency === 'USD') {
        this.formattedCurrency = `$${formatted.toFixed(2)}`;
      } else if (this.selectedCurrency === 'PHP') {
        this.formattedCurrency = `₱${formatted.toFixed(2)}`;
      } else if (this.selectedCurrency === 'EUR') {
        this.formattedCurrency = `€${formatted.toFixed(2)}`;
      }
    } else {
      this.formattedCurrency = null; // Reset if input is invalid
    }
  }
}
