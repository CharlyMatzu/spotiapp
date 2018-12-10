import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artists: any[] = [];

  constructor(private spotifyService: SpotifyService) { }

  buscar(termino) {
    this.spotifyService.searchArtists(termino)
      .subscribe( (data: any) => {
        console.log(data);
        this.artists = data;
      });
  }

}
