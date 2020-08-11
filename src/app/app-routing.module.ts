import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { CompletedComponent } from './completed/completed.component';

const routes: Routes = [
  {path: '', redirectTo: '/todo-list', pathMatch: 'full'},
  {
    path: 'todo-list', 
    component: TodoListComponent
  },
  {
    path: 'todo-add',
    component: TodoAddComponent
  },
  {
    path: 'todo-edit',
    component: TodoEditComponent
  },
  {
    path: 'completed',
    component: CompletedComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
