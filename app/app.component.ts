import { Component } from '@angular/core';

// interface ITodo {
//   title: string;
//   completed: boolean;
// }

class Todo {
  constructor(public title: string,
              public completed: boolean = false) {}


  // title: string;
  // completed: boolean;
  //
  // constructor(title: string, completed: boolean = false) {
  //   this.title = title;
  //   this.completed = completed;
  // }
}

const listTodo = [
    {
      title: 'First',
      completed: false
    },
    {
      title: 'Second',
      completed: true
    },
    {
      title: 'Third',
      completed: false
    },
  ];

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title: string = 'Hello Angular2';
  listTodo: Todo[] = listTodo;
  newTodoTitle: string = '';

  toggle(todo: Todo) {
    todo.completed = !todo.completed;
  }

  delete(todo: Todo) {
    let index = this.listTodo.indexOf(todo);

    if (index > -1) {
      this.listTodo.splice(index,1);
    }
  }

  create(event: Event, titleInput: string) {
    event.preventDefault();
    let todo: Todo = new Todo (titleInput);
    this.listTodo.push(todo);
  }
}