import { SignupService } from './signup/signup.service';
import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesModule } from '../shared/components/messages/messages.module';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    HomeComponent
    ],
  imports:[
    ReactiveFormsModule,
    CommonModule,
    MessagesModule,
    FormsModule,
    RouterModule,
    HomeRoutingModule
  ],
  providers:[SignupService]
})

export class HomeModule{}
