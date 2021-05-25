import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages-sucess',
  templateUrl: './messages.success.component.html'
})
export class MessagesSuccessComponent implements OnInit {

  @Input()
  text: string = '';

  constructor() { }

  ngOnInit() {
  }

}
