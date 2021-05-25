import { Injectable } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { Subject } from "rxjs";
import { Alert, AlertType } from "./alert";

@Injectable({ providedIn: 'root'})
export class AlertService {

  constructor(private router:Router) {
    router.events.subscribe(event =>{
      if(event instanceof NavigationStart){
        if(this.afterRouteChange){
          this.afterRouteChange = false;
        }else{
          this.limpaAlert();
        }
      }
    })
  }
    alertSubject: Subject<Alert> = new Subject<Alert>();
    afterRouteChange = false;

    success(message: string, afterRouteChange: boolean = false) {
        this.alert(AlertType.SUCCESS, message, afterRouteChange);
    }

    warning(message: string, afterRouteChange: boolean = false) {
        this.alert(AlertType.WARNING, message, afterRouteChange);
    }

    danger(message: string, afterRouteChange: boolean = false) {
        this.alert(AlertType.DANGER, message, afterRouteChange);
    }


    info(message: string, afterRouteChange: boolean = false) {
        this.alert(AlertType.INFO, message, afterRouteChange);
    }


    private alert(alertType: AlertType, message: string , afterRouteChange: boolean) {
        this.afterRouteChange = afterRouteChange;
        this.alertSubject.next(new Alert(alertType, message))
    }

    getAlert() {
        return this.alertSubject.asObservable();
    }

    limpaAlert(){
      this.alertSubject.next(null);
    }
}
