import { Component, Input } from '@angular/core';

const cloud = 'http://localhost:3000/imgs/'

@Component({

  selector: 'bit-photo',
  templateUrl: 'photo.component.html'
})

export class PhotoComponent {

  private _url = ''
  @Input() descricao = '';

  @Input() set url(url: string){
    if(!url.startsWith('data')){

      this._url = cloud + url
    }else{

      this._url = url;
    }
  }

  get url(){
    return this._url;
  }
}
