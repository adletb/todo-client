import { Component, OnInit } from '@angular/core';
import { Todo } from '../entity/Todo';
import { TodoService } from '../services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  todos: Todo[];
  todo:Todo = new Todo();   
  
  constructor(private service: TodoService, private router: Router) { }
  
  
  ngOnInit(): void {
    this.service.getTodos()
            .subscribe(result =>{
            this.todos = result
            .filter(t => t.completed === true)
            })
  }

  onChange(todo){
    todo.completed = !todo.completed;
    this.service.updateTodo(todo)
    .subscribe(data =>{
      this.todo = data;
    })
  }   

  Delete(todo: Todo){
    this.service.deleteTodo(todo)
    .subscribe(reslt =>{
       this.todos = this.todos
       .filter( t => t!== todo );
    } )
  } 
}
