import { Component, OnInit } from '@angular/core';
import {Task, TaskService} from '../shared/task.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  newTask: Task;
  tasks: Task[] = [];

  constructor(
    public taskService: TaskService,
    public router: Router
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

  editTaskClicked(task: Task) {
    this.router.navigate(['tasks', task.id]);
  }

}
