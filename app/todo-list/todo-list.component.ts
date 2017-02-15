import {Component} from "@angular/core";
import {Todo} from '../shared/todo';
import {listTodo} from '../shared/data';

@Component({
  moduleId: module.id,
  selector: 'todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.css']
})

export class TodoListComponent {
  listTodo: Todo[] = listTodo;

  // toggle(todo: Todo) {
  //   todo.completed = !todo.completed;
  // }
  //
  delete(todo: Todo) {
    console.log('del');
    let index = this.listTodo.indexOf(todo);

    if (index > -1) {
      this.listTodo.splice(index,1);
    }
  }
}
