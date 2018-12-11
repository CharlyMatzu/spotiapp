import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer ) { }

  transform( id: string ): any {
    const URL = 'https://open.spotify.com/embed/track/';
    // verificando URL maliciosa
    return this.domSanitizer.bypassSecurityTrustResourceUrl( URL + id );
  }

}
