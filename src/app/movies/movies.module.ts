import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { ViewAllMoviesComponent } from './view-all-movies/view-all-movies.component';
import { ViewMovieComponent } from './view-movie/view-movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipe/filter.pipe';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    MoviesComponent,
    ViewAllMoviesComponent,
    ViewMovieComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class MoviesModule { }
