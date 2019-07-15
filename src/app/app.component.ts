import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular5';

users = [];

onUserAdded(data:{name:string,id:number,tel:number,email:string}){
  this.users.push({
    name:data.name,
    id:data.id,
    tel:data.tel,
    email:data.email
  })
}

tableToDelete(){
  this.users = [];
}

}
