import { debounceTime, first, map, switchMap } from 'rxjs/operators';
import { SignupService } from './signup.service';
import { Injectable } from "@angular/core";
import { AbstractControl } from '@angular/forms';

@Injectable()
export class UserNotExistsValidatorService{
  constructor(private signupService: SignupService){}

  checkUserEqual(){

    return (control: AbstractControl) => {
      return control
              .valueChanges
              .pipe(debounceTime(300))
              .pipe(switchMap( userName => {
                return this.signupService.checkEqualUsername(userName)
              }))
              .pipe(map(Exists => Exists ? { userNameExists: true } : null))
              .pipe(first())
    }
  }
}
