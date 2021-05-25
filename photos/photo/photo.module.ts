import { HttpClientModule } from '@angular/common/http';
import { PhotoComponent } from './photo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PhotoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    PhotoComponent
  ]
})

export class PhotoModule{}
