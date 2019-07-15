import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

  @Output() addUser = new EventEmitter<{name:string, id:number, tel:number, email:string}>();
  
  onAddUser(name, id, tel, email){
    this.addUser.emit({
      name: name.value,
      id: id.value,
      tel: tel.value,
      email: email.value

    });
  }

  form:any;

  bindMyForm(form){
    this.form = form;
  }

  formToDelete(){
    this.form.reset();
  }
  
  constructor() { }

  ngOnInit() {
  }

}
