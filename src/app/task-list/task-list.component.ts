import { Component, OnInit } from '@angular/core';
import {TaskService} from "../shared/task.service";

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
  tasks: Task[] = [];

  constructor(
    public taskService: TaskService
  ) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
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
