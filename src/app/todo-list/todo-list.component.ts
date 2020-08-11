import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../entity/Todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  todo:Todo = new Todo();   
  
  constructor(private service: TodoService, private router: Router) { }
  
  
  ngOnInit(): void {
    this.service.getTodos()
            .subscribe(result =>{
            this.todos = result
            .filter( t => t.completed == false)
            })
  }


  onChange(todo){
    todo.completed = !todo.completed;
    this.service.updateTodo(todo)
    .subscribe(data =>{
      this.todo = data;
    })
  }

      
  Edit(todo: Todo):void{
    localStorage.setItem("id", todo.id.toString());
    this.router.navigate(["todo-edit"]);    
  }   

}
