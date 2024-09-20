import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './usergreeting.component.html',
  styleUrls: ['./usergreeting.component.css']
})
export class UsergreetingComponent {
  userName: string = '';
  greetingMessage: string | null = null;

  displayGreeting(): void {
    if (this.userName) {
      this.greetingMessage = `Hello, ${this.userName}! Welcome!`;
    } else {
      this.greetingMessage = null;
    }
  }
}

