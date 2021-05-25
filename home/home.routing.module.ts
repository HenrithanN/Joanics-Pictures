import { HomeComponent } from './home.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../core/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path: '',
        component: SigninComponent,
        data:{
          title:'Joanics - Login'
        }
      },
      {
        path: 'signup',
        component: SignupComponent,
        data:{
          title:'Joanics - Cadastro'
        }
      },
    ]

  }
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {

}
