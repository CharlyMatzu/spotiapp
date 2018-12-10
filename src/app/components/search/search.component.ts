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

  buscar(termino) {
    this.loading = true;

    this.spotifyService.searchArtists(termino)
      .subscribe( (data: any) => {
        this.artists = data;
        this.loading = false;
      });
  }

}
