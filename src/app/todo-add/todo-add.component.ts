import { Component, OnInit } from '@angular/core';
import { Todo } from '../entity/Todo';
import { Router } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  todo:Todo=new Todo();  
  constructor(private router: Router, 
    private service: TodoService) { }

  ngOnInit(): void {
  }

  AddTodo(){
    this.todo.completed = false;
    this.service.createTodo(this.todo)    
    .subscribe(data =>{
      // alert("Новая задача добавлена");
    })
    this.router.navigate(["todo-list"]);
  }

}
