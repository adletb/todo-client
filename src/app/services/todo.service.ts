import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../entity/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }
      todos: Todo[];
        
      Url = 'http://localhost:8080';

      getTodos(){
        return this.http.get<Todo[]>(this.Url+'/all');
      }

      getTodoId(id: number){
        return this.http.get<Todo>(this.Url+"/" + id);
      }

      createTodo(todo: Todo){
        return this.http.post<Todo>(this.Url+'/add', todo);
      }

      updateTodo(todo: Todo){
        return this.http.put<Todo>(this.Url+'/'+todo.id, todo);
      }
        
      deleteTodo(todo: Todo){
        return this.http.delete<Todo>(this.Url+'/' + todo.id);
      }
  
  }