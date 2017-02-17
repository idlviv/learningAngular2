import { Http, Headers, RequestOptions } from '@angular/http';
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
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers });
    let todo = new Todo(title);

    this.http.post(this.apiUrl, todo, options)
      .toPromise()
      .then(res => res.json().data)
      .then(todo => this.todos.push(todo))
      .catch(this.handleError);


    // this.todos.push(todo);
  }

  deleteTodo(todo: Todo) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers });
    let url = `${this.apiUrl}/${todo.id}`;

    this.http.delete(url, options)
      .toPromise()
      .then(res => {
        let index = this.todos.indexOf(todo);
        if (index > -1) {
          this.todos.splice(index,1);
        }
      })
      .catch(this.handleError);


  }

  toggleTodo(todo: Todo) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers });
    let url = `${this.apiUrl}/${todo.id}`;

    this.http.put(url, todo, options)
      .toPromise()
      .then(res => {
        todo.completed = !todo.completed;
      })
      .catch(this.handleError);

  }

  private handleError(error:any) {
    console.error('Сталася помилка', error);
    return Promise.reject(error.message || error);
  }

}