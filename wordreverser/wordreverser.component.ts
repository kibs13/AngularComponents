import { Component } from '@angular/core';

@Component({
  selector: 'app-wordreverser',
  templateUrl: './wordreverser.component.html',
  styleUrls: ['./wordreverser.component.css']
})
export class WordreverserComponent {
  inputWord: string = '';  // Holds the user's input word
  reversedWord: string | null = null;  // Holds the reversed word

  // Method to reverse the input word
  reverseWord(): void {
    this.reversedWord = this.inputWord.split('').reverse().join('');
  }
}
