export class Model {
  user: string;
  items: TodoItem[];

  constructor() {
    this.user = 'Ahmet';
    // Retrieve items from local storage if available, otherwise initialize as empty array
    this.items = JSON.parse(localStorage.getItem('todoItems') || '[]').map(
      (item: any) => new TodoItem(item.description, item.action)
    );
  }

  saveItems() {
    // Save items to local storage
    localStorage.setItem('todoItems', JSON.stringify(this.items));
  }
}

export class TodoItem {
  description: string;
  action: boolean;

  constructor(description: string, action: boolean) {
    this.description = description;
    this.action = action;
  }
}
