import { UserService } from './../../core/user/user.service';
import { AlertService } from './../../shared/components/alert/alert.service';
import { Observable } from 'rxjs';
import { PhotoService } from './../photo/photo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { Photo } from '../photo/photo';

@Component({
  templateUrl:'./photo-details.component.html',
  styleUrls:['./photo-details.css']
})
export class PhotoDetailsComponent implements OnInit{

  photo$: Observable<Photo>;
  photoId: number;

  constructor(
    private route:ActivatedRoute,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
    ){}

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findPhotoById(this.photoId);
    this.photo$.subscribe(()=>{},
    (err)=>{
      console.log(err),
      this.router.navigate(['not-found'])
    })
  }

  deletePhoto(){
    this.photoService.removePhoto(this.photoId)
    .subscribe(
      ()=>{
      this.alertService.success('Foto Removida!', true)
      this.router.navigate(['/user',this.userService.getUserName()], {replaceUrl: true})
    },
    err =>{
      console.log(err)
      this.alertService.warning('Você não pode remover essa foto!')
    });
  }
  likePhoto(photo: Photo){
    this.photoService.likePhoto(this.photoId)
    .subscribe(liked =>{
      if(liked){
        this.photo$ = this.photoService.findPhotoById(photo.id)
      }
    })
  }
}
