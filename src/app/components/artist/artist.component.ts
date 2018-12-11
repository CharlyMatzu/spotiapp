import { SpotifyService } from './../../services/spotify.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artist: any;
  tracks: any[] = [];

  constructor(  private spotify: SpotifyService,
                private router: ActivatedRoute  ) {

    // obteniendo parametro
    this.router.params.subscribe( params => {
        this.getArtist( params['id'] );
        this.getTopTracks( params['id'] );
    });

  }

  /**
   * Obtiene el arista
   * @param id id de artista
   */
  getArtist( id: string ) {
    this.spotify.getArtist( id )
      .subscribe( data => {
        this.artist = data;
      });
  }


  /**
   * Obtiene top de canciones del artista
   * @param id id de artista
   */
  getTopTracks( id: string ) {
    this.spotify.getTopTracks( id )
      .subscribe( (data: any) => {
        this.tracks = data;
        console.log(data);
      });
  }



}
