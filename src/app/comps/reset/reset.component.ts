import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  @Output() deleteForm = new EventEmitter();
  @Output() deleteTable = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
