import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromechecker',
  templateUrl: './palindromechecker.component.html',
  styleUrls: ['./palindromechecker.component.css']
})
export class PalindromecheckerComponent {
  inputWord: string = '';  // Holds the input word
  isPalindrome: boolean | null = null;  // Stores the result of the palindrome check

  // Method to check if the word is a palindrome
  checkPalindrome(): void {
    const cleanedWord = this.inputWord.replace(/[^A-Za-z0-9]/g, '').toLowerCase();  // Remove non-alphanumeric characters and convert to lowercase
    const reversedWord = cleanedWord.split('').reverse().join('');
    this.isPalindrome = cleanedWord === reversedWord;
  }
}

