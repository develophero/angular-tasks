import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Http} from "@angular/http";

export interface Task {
  id: number,
  content: string,
  isDone: boolean
}

@Injectable()
export class TaskService {

  private tasksCache: Task[];

  constructor(
    private http: Http
  ) { }

  getTasks() {
    return new Observable<Task[]>((observer) => {
      if (this.tasksCache) {
        observer.next(this.tasksCache);
        observer.complete();
      } else {
        this.http.get('/assets/tasks.json').map(res => res.json()).subscribe((tasks) => {
          this.tasksCache = tasks;
          observer.next(this.tasksCache);
          observer.complete();
        });
      }
    });
  }

  getById(id: number) {
    // A "cheat" method for now - we get all the tasks again and just return the one
    // with that id. Note that without modifications this won't work with new tasks you've created!
    return new Observable<Task>((observer) => {
      this.getTasks().subscribe((tasks) => {
        let foundTask;
        for (let task of tasks) {
          if (task.id === id) {
            foundTask = task;
            break;
          }
        }
        observer.next(foundTask);
        observer.complete();
      })
    });
  }

}
