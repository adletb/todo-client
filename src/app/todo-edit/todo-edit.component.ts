import { Component, OnInit } from '@angular/core';
import { Todo } from '../entity/Todo';
import { Router } from '@angular/router';
import { TodoService } from '../services/todo.service';


@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent {
  
  todo: Todo=new Todo();


  constructor(private router: Router, private service: TodoService) { }

  ngOnInit(): void {
    this.Edit();
  }

  Edit(){
    let id=localStorage.getItem("id");
    this.service.getTodoId(+id)
    .subscribe(data=>{
      this.todo=data;
      console.log(this.todo);
    })
  }

  
  Update(todo:Todo){
    // console.log(todo);
    this.service.updateTodo(todo)
    .subscribe(data=>{
      this.todo=data;
      this.router.navigate(["todo-list"]);
    })
  }

}
