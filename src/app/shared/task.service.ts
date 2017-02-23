import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

export interface Task {
  id: number,
  content: string,
  isDone: boolean
}

@Injectable()
export class TaskService {

  constructor(
    private http: Http
  ) { }

  getTasks() {
    return this.http.get('/tasks.json').map(res => res.json());
  }

}
