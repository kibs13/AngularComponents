import { Component } from '@angular/core';

interface Task {
  id: number;
  title: string;
}

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']  // Optional for styles
})
export class TaskManagerComponent {
  tasks: Task[] = [];
  newTaskTitle: string = '';
  nextId: number = 1;

  addTask() {
    if (this.newTaskTitle.trim()) {
      this.tasks.push({ id: this.nextId++, title: this.newTaskTitle.trim() });
      this.newTaskTitle = '';  // Clear the input after adding
    } else {
      alert('Please enter a task title.');
    }
  }

  removeTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}
