import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {TaskListComponent} from "./task-list/task-list.component";
import {TaskEditComponent} from "./task-edit/task-edit.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'tasks', component: TaskListComponent },
      { path: 'tasks/:id', component: TaskEditComponent },
      { path: '', redirectTo: 'tasks', pathMatch: 'full' }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
