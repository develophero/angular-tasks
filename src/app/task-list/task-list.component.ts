import { Component, OnInit } from '@angular/core';

interface Task {
  id: number,
  content: string,
  isDone: boolean
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  newTask: Task;
  tasks: Task[] = [
    {
      "id": 1,
      "content": "Learn about components",
      "isDone": false
    },
    {
      "id": 2,
      "content": "Learn about services",
      "isDone": false
    }
  ];

  constructor() { }

  ngOnInit() {

  }

  taskClicked(task: Task) {
    task.isDone = !task.isDone;
  }

  getUndoneTasks() {
    return this.tasks.filter((task) => {
      return !task.isDone;
    });
  }

  getDoneTasks() {
    return this.tasks.filter((task) => {
      return task.isDone;
    });
  }

  newTaskClicked() {
    this.newTask = {
      id: -1,
      content: '',
      isDone: false
    }
  }

  saveTaskClicked() {
    if (this.newTask.content) {
      this.tasks.push(this.newTask);
      this.newTask = null;
    }
  }

}
