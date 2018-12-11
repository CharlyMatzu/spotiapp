import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artists: any[] = [];
  loading: boolean;

  constructor(private spotifyService: SpotifyService) { }

  /**
   * Obtiene los artistas en base al termino escrito
   * @param termino valor a buscar
   */
  buscar(termino) {
    this.loading = true;

    this.spotifyService.searchArtists(termino)
      .subscribe( (data: any) => {
        this.artists = data;
        this.loading = false;
      });
  }

}
