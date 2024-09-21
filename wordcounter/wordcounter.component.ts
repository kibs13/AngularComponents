import { Component } from '@angular/core';

@Component({
  selector: 'app-wordcounter',
  templateUrl: './wordcounter.component.html',
  styleUrls: ['./wordcounter.component.css']
})
export class WordcounterComponent {
  inputText: string = '';  // Holds the user's input text
  wordCount: number | null = null;  // Stores the word count result

  // Method to count the number of words in the input text
  countWords(): void {
    if (this.inputText.trim()) {
      // Split the text by spaces and filter out any empty strings
      this.wordCount = this.inputText.trim().split(/\s+/).filter(word => word.length > 0).length;
    } else {
      this.wordCount = 0;  // If the input is empty or just spaces
    }
  }
}
