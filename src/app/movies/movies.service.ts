import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import behaviour subject
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  // object create behaviour subject
  search = new BehaviorSubject("")


  constructor(private http: HttpClient) { }
//api for all movie
  viewAllMovies() {
    return this.http.get('http://localhost:3000/movies')
  }

  //api for single movie
  viewMovie(movieId: any) {
    return this.http.get('http://localhost:3000/movies/' + movieId)
  }
}
