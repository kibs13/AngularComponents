import { Component } from '@angular/core';

@Component({
  selector: 'app-randomquotedisplay',
  templateUrl: './randomquotedisplay.component.html',
  styleUrls: ['./randomquotedisplay.component.css']
})
export class RandomquotedisplayComponent {
  // List of quotes
  quotes: string[] = [
    'The only limit to our realization of tomorrow is our doubts of today.',
    'Do not watch the clock. Do what it does. Keep going.',
    'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    'Believe you can and you’re halfway there.',
    'Act as if what you do makes a difference. It does.',
    'It is never too late to be what you might have been.'
  ];

  randomQuote: string | null = null;  // Holds the selected random quote

  // Method to show a random quote
  showRandomQuote(): void {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.randomQuote = this.quotes[randomIndex];
  }
}
