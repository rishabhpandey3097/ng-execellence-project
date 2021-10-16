import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  tasks: string[];
  editMode = false;
  currentIndex;

  @ViewChild('taskInput') taskInput: ElementRef<any>;

  ngOnInit(): void {
    this.tasks = JSON.parse(localStorage.getItem('tasks'));
    if (!this.tasks) {
      this.tasks = ['Get up early', 'Mail client'];
    }
  }

  addTask(task: HTMLInputElement) {
    if (this.editMode) {
      this.tasks[this.currentIndex] = task.value;
      this.editMode = false;
    } else if (!this.editMode) {
      if (!task.value) return;
      this.tasks.push(task.value);
    }
    this.taskInput.nativeElement.value = null;

    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  deleteTask(index: number) {
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }

  editTask(index: number) {
    this.currentIndex = index;
    this.editMode = true;
    this.taskInput.nativeElement.value = this.tasks[index];
  }
}
