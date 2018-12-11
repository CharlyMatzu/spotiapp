import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }


  // ------------funciones
  // New Token
  // https://accounts.spotify.com/api/token
  // grant_type:client_credentials
  // client_id:...
  // client_secret:...


  private getRequest( query: string ) {
    const url = `https://api.spotify.com/v1${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAsfZTxlBjJBhHhMIuXjy66l-Wr4E9lnWhstE6qdgqMCkix5b6Pl9NLiqR55eKPG0FH-V8iBcUh2n68Myo'
    });

    return this.http.get( url, {headers} );
  }


  /**
   * Obtiene los nuevos lanzamientos (albums)
   */
  getNewReleases() {
    return this.getRequest('/browse/new-releases?limit=20')
              .pipe( map( data => {
                return data['albums'].items;
              }));
  }


  /**
   * Obtiene los artistas en base a un termino
   * @param termino valor a buscar
   */
  searchArtists(termino: string) {
    return this.getRequest(`/search?q=${termino}&type=artist&limit=20`)
              .pipe( map( data => {
                return data['artists'].items;
              }));
  }


  /**
   * Obtiene datos de un artista
   * @param id id de artista
   */
  getArtist(id: string) {
    return this.getRequest(`/artists/${id}`);
  }


  /**
   * Obtiene el TOP de canciones de un artista
   * @param id id de artista
   */
  getTopTracks(id: string) {
    return this.getRequest(`/artists/${id}/top-tracks?country=US`)
              .pipe( map( data => {
                return data['tracks'];
              }));
  }


}
