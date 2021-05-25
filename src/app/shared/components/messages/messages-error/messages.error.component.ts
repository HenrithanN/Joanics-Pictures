import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages-error',
  templateUrl: './messages.error.component.html'
})
export class MessagesErrorComponent implements OnInit {

  @Input()
  text: string = '';

  constructor() { }

  ngOnInit() {
  }

}
