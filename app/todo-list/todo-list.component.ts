import {Component, OnInit} from "@angular/core";
import {Todo} from '../shared/todo';
import {TodoService} from '../shared/todo.service';

@Component({
  moduleId: module.id,
  selector: 'todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  todos: Todo[];

  // todoService: TodoService; //Замість вказуємо в конструкторі private

  constructor(private todoService: TodoService) {
    // this.todoService = todoService; //Замість вказуємо в конструкторі private
    this.todos = [];
  }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  delete(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }

  toggle(todo: Todo) {
    this.todoService.toggleTodo(todo);
  }

}
