import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = [
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
    return { todos }; //повертаємо обєкт {todos: todos}, оск власт і значення співпадають одне можна забрати;
  }
}

