import { Observable } from 'rxjs';
import { UserService } from './../user/user.service';
import { Component, OnInit } from "@angular/core";
import { User } from '../user/user';

@Component({
  selector:'app-footer',
  templateUrl:'./footer.component.html'
})
export class FooterComponent implements OnInit{

  user$: Observable<User>;
  constructor(private userService: UserService){}

  ngOnInit(){

    this.user$ = this.userService.getUser()
  }
}
