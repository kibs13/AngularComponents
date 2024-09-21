import { Component } from '@angular/core';

@Component({
  selector: 'app-todomanager',
  templateUrl: './todomanager.component.html',
  styleUrls: ['./todomanager.component.css']
})
export class TodomanagerComponent {
  newTask: string = '';                // Holds the new task to be added
  tasks: string[] = [];                // List of tasks

  // Method to add a task to the list
  addTask(): void {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask);
      this.newTask = '';  // Clear the input field after adding
    }
  }

  // Method to remove a task from the list by index
  removeTask(index: number): void {
    this.tasks.splice(index, 1);  // Remove task at the given index
  }
}
