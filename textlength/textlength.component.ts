import { Component } from '@angular/core';

@Component({
  selector: 'app-textlength',
  templateUrl: './textlength.component.html',
  styleUrls: ['./textlength.component.css']
})
export class TextlengthComponent {
  inputText: string = '';  // Holds the user's input text
  textLength: number | null = null;  // Holds the calculated text length

  // Method to calculate the length of the input text
  calculateTextLength(): void {
    this.textLength = this.inputText.length;
  }
}
