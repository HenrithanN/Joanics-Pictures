import { ImmediateClickModule } from './../../shared/directives/immediate-click/immediate-click.module';
import { PhotoModule } from './../photo/photo.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhotoFormComponent } from './photo-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesModule } from 'src/app/shared/components/messages/messages.module';
@NgModule({
  declarations: [
    PhotoFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MessagesModule,
    FormsModule,
    RouterModule,
    PhotoModule,
    ImmediateClickModule
  ],
})

export class PhotoFormModule { }
