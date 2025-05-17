import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  task: string = '';
  tasks: { name: string; completed: boolean }[] = [];

  addTask() {
    if (this.task.trim()) {
      this.tasks.push({ name: this.task, completed: false });
      this.task = '';
    }
  }

  toggleComplete(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
  
  get totalTasks(): number {
    return this.tasks.length;
  }
  
  get completedTasks(): number {
    return this.tasks.filter(task => task.completed).length;
  }
  
  
}
