import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[], args?: any): any {
    // si no hay imagenes
    if ( !images || images.length === 0 ) {
      return 'assets/img/noimage.png';
    }
    // si hay imagenes
    return images[0].url;

  }

}
