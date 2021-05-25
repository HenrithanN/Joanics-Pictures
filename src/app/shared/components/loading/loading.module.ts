import { LoadingInterceptorService } from './loading-interceptor.service';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading.component';
import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations:[LoadingComponent],
  exports:[LoadingComponent],
  imports:[CommonModule],
  providers:[{
    provide:HTTP_INTERCEPTORS,
    useClass:LoadingInterceptorService,
    multi:true
  }]
})
export class LoadingModule{}
