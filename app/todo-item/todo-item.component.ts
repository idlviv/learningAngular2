import {Component, Input, Output, EventEmitter} from "@angular/core";

import {Todo} from '../shared/todo';

@Component({
  moduleId: module.id,
  selector: 'todo-item',
  templateUrl: 'todo-item.component.html',
  styleUrls: ['todo-item.component.css']
})

export class TodoItemComponent {
  @Input() todo: Todo; // Приймаэмо з tlc.h, воно доступне з іменем, що було в []
  @Output() delete = new EventEmitter(); // Вихідні дані - подія, екземпляр класу подій
  @Output() toggle = new EventEmitter();

  onToggle() {
    this.toggle.emit(this.todo);
  }
  onDelete() {
    // OnDelete метод, що буде викликатися при натисненні кн Delete (имя onDelete щоб не конфдіктувало з існ. delete
    this.delete.emit(this.todo);
    // emit() метод, при виклику якого станеться подія
    // як подію передаємо сам обєкт this.todo і він буде доступний як $event в tlc.h
  }
}