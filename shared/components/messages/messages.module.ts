import { MessagesSuccessComponent } from './messages-success/messages.success.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesErrorComponent } from './messages-error/messages.error.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MessagesErrorComponent,
    MessagesSuccessComponent],
  exports:[
    MessagesErrorComponent,
    MessagesSuccessComponent]
})
export class MessagesModule { }
