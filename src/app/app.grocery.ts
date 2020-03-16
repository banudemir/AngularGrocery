import { Component } from '@angular/core';
 
@Component({
    selector: 'app-grocery',
    templateUrl: './app.grocery.html',
    styleUrls: [
        '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
    ]
})
export class GroceryComponent {
  task = {
    name: '',
    id: 0,
    strike: false
  };

  tasks = [];
 
  onClick(){
    if(this.task.id == 0){
        this.tasks.push({id: (new Date()).getTime(),name: this.task.name, strike: false});
    }
     
    this.task = {
        name: '',
        id: 0,
        strike: false
    };
  }

  onDelete(item){
    for(var i = 0;i < this.tasks.length; i++){
        if(item.id == this.tasks[i].id){
            this.tasks.splice(i,1);
            break;
        }
    }
  }

  onEdit(item){
    this.task = item;
  }

  onStrike(item){
    for(var i = 0;i < this.tasks.length; i++){
      if(item.id == this.tasks[i].id){
        if(this.tasks[i].strike){
          this.tasks[i].strike = false;
        }
        else{
          this.tasks[i].strike = true;
        }
        break;
      }
    }
  }


}