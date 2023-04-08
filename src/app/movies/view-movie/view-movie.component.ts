import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css']
})
export class ViewMovieComponent implements OnInit {

  movId: any
  moviedata: any

  constructor(private ms: MoviesService, private ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {

      this.movId = data["id"]

      this.ms.viewMovie(this.movId).subscribe((data: any) => {
        this.moviedata = data

      })

    })
  }

}
