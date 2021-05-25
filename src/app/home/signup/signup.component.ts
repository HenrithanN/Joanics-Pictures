import { SignupService } from './signup.service';
import { UserNotExistsValidatorService } from './user-not-exists.validator.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lowerCase.validator';
import { NewUser } from './newUser.interface';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { userNamePassword } from './username-password.validator';

@Component({
  templateUrl: './signup.component.html',
  providers: [UserNotExistsValidatorService]
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  @ViewChild('nomeCompletoInput') nomeCompletoInput: ElementRef<HTMLInputElement>;
  constructor(
    private formBuilder: FormBuilder,
    private userNotExistsValidatorService: UserNotExistsValidatorService,
    private signupService: SignupService,
    private router:Router,
    private platformDetectorService: PlatformDetectorService
    ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      userName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          lowerCaseValidator,
          Validators.maxLength(30)
        ],
        [
          this.userNotExistsValidatorService.checkUserEqual()
        ]
      ],
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      fullName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14)
        ]
      ]
    },
    {
      validator: userNamePassword
    });

    this.platformDetectorService.ehBrowser() &&
      this.nomeCompletoInput.nativeElement.focus();
  }

  signup(){
    if(this.signupForm.valid || !this.signupForm.pending){

      const newUser = this.signupForm.getRawValue() as NewUser;
      this.signupService.signup(newUser).subscribe(
        ()=>{
        this.router.navigate([''])
      }),err => console.log(err)
    }
  }
}
