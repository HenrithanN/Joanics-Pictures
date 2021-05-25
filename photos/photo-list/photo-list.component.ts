import { User } from './../../core/user/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html'
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filtro: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.userName = params.userName;
      this.photos = this.activatedRoute.snapshot.data['photos'];
    })

  }

  load() {
    this.photoService.listPhotos(this.userName, ++this.currentPage)
    .subscribe(photos => {
      this.filtro = '';
      this.photos = this.photos.concat(photos);
      if (!photos.length) {
        this.hasMore = false;
      }
    });
  }
}
