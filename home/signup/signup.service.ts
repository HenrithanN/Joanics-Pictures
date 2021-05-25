import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { NewUser } from './newUser.interface';

const API = environment.apiUrl;

@Injectable()

export class SignupService{

  constructor(private http:HttpClient){}

  checkEqualUsername(userName: string){
    return this.http.get(`${API}/user/exists/${userName}`)
  }

  signup(newUser: NewUser){
    return this.http.post(`${API}/user/signup`,newUser)
  }
}
