import { Component } from '@angular/core';

@Component({
  selector: 'app-uppercaseconverter',
  templateUrl: './uppercaseconverter.component.html',
  styleUrls: ['./uppercaseconverter.component.css']
})
export class UppercaseconverterComponent {
  inputString: string = '';             // Holds the user's input string
  uppercaseString: string | null = null; // Stores the converted uppercase string

  // Method to convert the input string to uppercase
  convertToUppercase(): void {
    this.uppercaseString = this.inputString.toUpperCase();
  }
}
