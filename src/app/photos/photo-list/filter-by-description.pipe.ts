import { Pipe, PipeTransform } from "@angular/core";
import { Photo } from "../photo/photo";

@Pipe({ name: 'filterByDescription' })

export class FilterByDescription implements PipeTransform {
  transform(photos: Photo[], pesquisaDescricao) {
    pesquisaDescricao = pesquisaDescricao
    .trim()
    .toLowerCase();

    if ( pesquisaDescricao ){
      return photos.filter( photo =>
        photo.description
        .toLowerCase()
        .includes(pesquisaDescricao)
        );
    } else {
      return photos;
    }
  }

}
