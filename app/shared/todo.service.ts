import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise'; // виконається все в файлі toPromise.js
        // після цього імпорта у обєкта Observable зявиться метод toPromise

import { Todo } from './todo';

@Injectable() // щоб в сервісі використовувати інші сервіси потрібно добавити анотацію за допомогою декоратора Injectable

export class TodoService {
  private apiUrl = 'api/todos'; //адреса api буде потрібна дальше, для зручності збережемо як властивість класу
  todos: Todo[] = [];

  constructor(private http: Http) {}; //отримуємо екземпляр сервіса http через конструктор
                                      //шляхом добавлення в клас конструктора
                                      //екземпляк сервіса буде розміщений у властивості класу під іменем http

  getTodos():Promise<Todo[]> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(res => res.json().data)
      .then(todos => this.todos = todos)
      .catch(this.handleError);
  }

  createTodo(title: string) {
    let todo = new Todo(title);
    this.todos.push(todo);
  }

  deleteTodo(todo: Todo) {
    let index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index,1);
    }
  }

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
  }

  private handleError(error:any) {
    console.error('Сталася помилка', error);
    return Promise.reject(error.message || error);
  }

}