import { LoadingModule } from './../shared/components/loading/loading.module';
import { AlertModule } from './../shared/components/alert/alert.module';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestIntercepton } from './auth/request.intercepton';

@NgModule({
  declarations:[
    HeaderComponent,
    FooterComponent
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ],
  imports:[
    CommonModule,
    RouterModule,
    AlertModule,
    LoadingModule
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestIntercepton,
      multi: true
    }
  ]
})

export class CoreModule{}
