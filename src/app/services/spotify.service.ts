import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }


  // ------------funciones
  private getRequest( query: string ) {
    const url = `https://api.spotify.com/v1${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDe9xxOY2gv4rdAYLY6e7O_DI-vPdEHFbDKdXqWqljlaFlUjNT2pLM0K6YEXGvrP8Jw8oy07kPKnTzYQUM'
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


}
