import { Component } from '@angular/core';

@Component({
  selector: 'app-uppercasegreeting',
  templateUrl: './uppercasegreeting.component.html',
  styleUrls: ['./uppercasegreeting.component.css']
})
export class UppercasegreetingComponent {
  name: string = '';  // User input name
  uppercaseName: string | null = null;  // Holds the uppercase version of the name

  // Method to convert the name to uppercase
  convertToUppercase(): void {
    if (this.name) {
      this.uppercaseName = this.name.toUpperCase();
    } else {
      this.uppercaseName = null;  // Reset if no input
    }
  }
}
