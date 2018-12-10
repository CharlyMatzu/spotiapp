import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent {

  // elementos enviados desde la declaracuion del componente
  @Input() items: any[] = [];

  constructor() { }

}
