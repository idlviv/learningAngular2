import { Component } from '@angular/core';

const listTodo = [
    'First',
    'Second',
    'Third'
  ];

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {
    title = 'Hello Angular2';
    listTodo = listTodo;
}