import { ShowIfLoggedModule } from './../../shared/directives/show-if-logged/show-if-logged.module';
import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { PhotoModule } from './../photo/photo.module';
import { CommonModule } from '@angular/common';
import { PhotoDetailsComponent } from './photo-details.component';
import { NgModule } from "@angular/core";
import { MessagesModule } from 'src/app/shared/components/messages/messages.module';

@NgModule({
  declarations: [
    PhotoDetailsComponent,
    PhotoCommentsComponent,
    PhotoOwnerOnlyDirective
],
  exports: [
    PhotoDetailsComponent,
    PhotoCommentsComponent
],
  imports: [
      CommonModule,
      PhotoModule,
      RouterModule,
      ReactiveFormsModule,
      MessagesModule,
      ShowIfLoggedModule
  ]
})

export class PhotoDetailsModule{}
