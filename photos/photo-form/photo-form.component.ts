import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { UserService } from './../../core/user/user.service';
import { AlertService } from './../../shared/components/alert/alert.service';
import { PhotoService } from './../photo/photo.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { httpFactory } from '@angular/http/src/http_module';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'bit-photo-form',
  templateUrl: './photo-form.component.html'
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup;
  file: File;
  preview: string;
  percentDone = 0;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
    ) { }

  ngOnInit() {
    this.photoForm = this.formBuilder.group({
      file: ['',[Validators.required]],
      description: ['',[Validators.maxLength(300)]],
      allowComments: [true]
    })
  }

  upload(){
    const description = this.photoForm.get('description').value;
    const allowComments = this.photoForm.get('allowComments').value;
    this.photoService.upload(description, allowComments, this.file)
    .pipe(finalize(()=>{
      this.router.navigate(['/user',this.userService.getUserName()])
    }))
    .subscribe((event: HttpEvent<any>)=>{
      if(event.type == HttpEventType.UploadProgress){

        this.percentDone = Math.round(100 * event.loaded / event.total);
        console.log(this.percentDone)
      }else if(event instanceof HttpResponse){

        this.alertService.success('Upload de Imagem realizado com Sucesso!', true)
        this.router.navigate(['/user', this.userService.getUserName()])
      }
    }),err => {
      console.log(err)
      this.alertService.danger('Falha no carregamento da Imagem!')
    }
  }

  handleFile(file: File){
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => this.preview = event.target.result;
    reader.readAsDataURL(file);
  }
}
