import { Component } from '@angular/core';
import { Model } from './model';
import { TodoItem } from './model';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDisplay:boolean=true;
  user = 'Ahmet';
  model=new Model();
  getName(){
    return this.model.user;
  }
  getItems(){
    if(!this.isDisplay){
      return this.model.items.filter((item)=>!item.action);
    }
    return this.model.items;
  }
  addItem(value:string){
    if(value!=null){
      return this.model.items.push(new TodoItem(value,false));

    }
    else{
      return throwError;
    }
  }


}
