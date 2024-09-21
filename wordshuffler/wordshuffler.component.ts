import { Component } from '@angular/core';

@Component({
  selector: 'app-wordshuffler',
  templateUrl: './wordshuffler.component.html',
  styleUrls: ['./wordshuffler.component.css']
})
export class WordshufflerComponent {
  inputWord: string = '';             // Holds the user's input word
  shuffledWord: string | null = null; // Stores the shuffled word

  // Method to shuffle the letters of the input word
  shuffleWord(): void {
    if (this.inputWord) {
      this.shuffledWord = this.inputWord.split('')
        .sort(() => Math.random() - 0.5)  // Shuffle letters randomly
        .join('');                        // Join letters back into a string
    } else {
      this.shuffledWord = null; // Reset if input is empty
    }
  }
}
