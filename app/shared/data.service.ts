import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = [
      {
        id: 1,
        title: 'First',
        completed: false
      },
      {
        id: 2,
        title: 'Second',
        completed: true
      },
      {
        id: 3,
        title: 'Third',
        completed: false
      },
    ];
    return { todos }; //повертаємо обєкт {todos: todos}, оск власт і значення співпадають одне можна забрати;
  }
}

