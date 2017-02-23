import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {TaskService, Task} from "../shared/task.service";

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {

  task: Task;
  routeSubscription: Subscription;
  editingContent: string;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.taskService.getById(id).subscribe((task) => {
        this.task = task;
        this.editingContent = task.content;
      });
    });
  }

  ngOnDestroy() {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  saveTaskClicked() {
    if (this.editingContent) {
      this.task.content = this.editingContent;
      this.router.navigate(['/tasks']);
    }
  }

  cancelClicked() {
    this.router.navigate(['/tasks']);
  }

}
