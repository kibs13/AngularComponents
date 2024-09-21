import { Component } from '@angular/core';

@Component({
  selector: 'app-guessnumbergame',
  templateUrl: './guessnumbergame.component.html',
  styleUrls: ['./guessnumbergame.component.css']
})
export class GuessnumbergameComponent {
  randomNumber: number;  // Stores the random number
  userGuess: number | null = null;  // Holds the user's guess
  attempts: number = 0;  // Tracks the number of attempts
  message: string | null = null;  // Feedback message for the user
  gameOver: boolean = false;  // Tracks if the game is over

  constructor() {
    this.randomNumber = this.generateRandomNumber();
  }

  // Generate a random number between 1 and 100
  generateRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1;
  }

  // Check the user's guess
  checkGuess(): void {
    if (this.userGuess === null) {
      this.message = "Please enter a valid number.";
      return;
    }

    this.attempts++;
    if (this.userGuess < this.randomNumber) {
      this.message = "Too low!";
    } else if (this.userGuess > this.randomNumber) {
      this.message = "Too high!";
    } else {
      this.message = "Correct!";
      this.gameOver = true;
    }
  }

  // Reset the game
  resetGame(): void {
    this.randomNumber = this.generateRandomNumber();
    this.userGuess = null;
    this.attempts = 0;
    this.message = null;
    this.gameOver = false;
  }
}
