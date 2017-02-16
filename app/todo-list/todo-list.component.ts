import {Component, Input} from "@angular/core";
import {Todo} from '../shared/todo';

@Component({
  moduleId: module.id,
  selector: 'todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.css']
})

export class TodoListComponent {
  @Input() listTodo: Todo[];

  // toggle(todo: Todo) {
  //   todo.completed = !todo.completed;
  // }

  delete(todo: Todo) {
    let index = this.listTodo.indexOf(todo);

    if (index > -1) {
      this.listTodo.splice(index,1);
    }
  }
}
