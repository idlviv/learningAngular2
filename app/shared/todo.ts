// interface ITodo {
//   title: string;
//   completed: boolean;
// }

export class Todo {
  id: number;
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
