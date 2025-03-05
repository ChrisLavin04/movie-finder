import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IOMDBResponse } from './omdresponse';
import { OmdbApiService } from './service/omdb-api.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie-finder';
  movieData:IOMDBResponse | undefined;
  errorMessage:any;
  
  constructor(private _omdbService:OmdbApiService) {}

  getMovieDetails(movieName:string): boolean {
    this._omdbService.getMovieData(movieName).subscribe(
      movieData => {
        this.movieData = movieData;
        console.log("Director name: " + this.movieData.Director);
      }
    )
    return false;
  }
}