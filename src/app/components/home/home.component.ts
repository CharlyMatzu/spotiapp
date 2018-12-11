import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  albums: any[] = [];
  loading: boolean;

  error: boolean;
  errorMessage: string;

  constructor( private spotifyService: SpotifyService ) {
    this.loading = true;
    this.error = false;

    // obtiene canciones
    this.spotifyService.getNewReleases()
      .subscribe( (data: any) => {
          this.albums = data;
          this.loading = false;

      }, (errorRes) => {
        this.loading = false;
        this.error = true;
        this.errorMessage = errorRes.error.error.message;
        console.log(errorRes);
      });
  }

}




// ---------- JUST AN EXAMPLE
// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styles: []
// })
// export class HomeComponent implements OnInit {

//   // public para que sea accesible desde html
//   countries: any[] = [];

//   constructor( private http: HttpClient ) {
//     // example
//     this.http.get('https://restcountries.eu/rest/v2/lang/es')
//       .subscribe( (countries: any) => {
//         // console.log(countries);
//         this.countries = countries;
//       });
//   }

//   ngOnInit() {
//   }

// }
