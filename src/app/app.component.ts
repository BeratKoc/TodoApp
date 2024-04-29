import { Component } from '@angular/core';
import { Model, TodoItem } from './model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoItemValue:string="";
  isDisplay: boolean = true;
  user = 'Ahmet';
  model = new Model();
  getName() {
    return this.model.user;
  }

  getItems() {
    if (this.isDisplay) {
      return this.model.items;
    }
    return this.model.items.filter((item) => !item.action);

  }

  addItem(value: string) {
    if (value && value.trim() !== "") {
      this.model.items.push(new TodoItem(value, false));
      this.todoItemValue = "";
      this.model.saveItems();
    } else {
      alert("Value cannot be blank.");

  }
  }

  deleteItem(index: number) {
    if (confirm("Are you sure you want to delete this item?")) {
      this.model.items.splice(index, 1);

      localStorage.setItem('todoItems', JSON.stringify(this.model.items));
    } else {

    }

  }
}
