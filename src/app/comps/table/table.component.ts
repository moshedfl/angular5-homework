import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

@Input() user:{name:string,id:number,tel:number,email:string};

  constructor() { }

  ngOnInit() {
  }

}
