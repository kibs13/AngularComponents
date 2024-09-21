import { Component } from '@angular/core';

@Component({
  selector: 'app-charactercounter',
  templateUrl: './charactercounter.component.html',
  styleUrls: ['./charactercounter.component.css']
})
export class CharactercounterComponent {
  inputString: string = '';  // Holds the input string
}
