import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent {

  // elementos enviados desde la declaracuion del componente
  @Input() items: any[] = [];

  constructor( private router: Router ) { }

  /**
   * obtiene ID de arista dependiendo del "type" y redirecciona
   * @param item elemento seleccionado
   */
  getArtist( item: any ) {
    let id;
    // Obtiene
    if ( item.type === 'artist' ) {
      id = item.id;
    } else {
      id = item.artists[0].id;
    }

    // redireccion
    this.router.navigate(['/artist', id]);

  }

}
