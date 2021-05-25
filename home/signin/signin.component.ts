import { AuthService } from '../../core/auth/auth.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { LoginUser } from './loginUser.interface';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('nomeDeUsuarioInput') nomeDeUsuarioInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService:PlatformDetectorService
    ) { }

  ngOnInit(): void{
    this.loginForm = this.formBuilder.group({
      userName: ['',Validators.required],
      password: ['',Validators.required]
    })

    this.platformDetectorService.ehBrowser() &&
    this.nomeDeUsuarioInput.nativeElement.focus();
  }

  login(){

    const loginUser = this.loginForm.getRawValue() as LoginUser;

    this.authService
      .authenticate(loginUser.userName, loginUser.password)
      .subscribe(
        ()=> this.router.navigate(['user/', loginUser.userName]),
        err => {
        console.log(err);
        this.loginForm.reset();
        this.platformDetectorService.ehBrowser() && this.nomeDeUsuarioInput.nativeElement.focus();
        alert('Usuario ou senha incorretos!');
      }
    )
  }


}
