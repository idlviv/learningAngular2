import { Component } from '@angular/core';

import {Todo} from './shared/todo';
import {listTodo} from './shared/data';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title: string = 'Hello Angular2';
  listTodo: Todo[] = listTodo;

create(title: string) {
  const todo = new Todo(title);
  this.listTodo.push(todo);
}


}