import { Component,OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-view-all-movies',
  templateUrl: './view-all-movies.component.html',
  styleUrls: ['./view-all-movies.component.css']
})
export class ViewAllMoviesComponent implements OnInit {

  movieList:any
  filterMovies:any
  searchkey:any=" "
  searchTerm:any

  
  constructor(private ms:MoviesService){ }

  ngOnInit(): void {

    this.ms.viewAllMovies().subscribe(data=>{
      this.movieList=data
    })
    this.ms.search.subscribe((value:any)=>{
      this.searchkey=value
    })
 }


  filter(category:any){
    this.filterMovies=this.movieList.filter((item:any)=>item.categoryid==category || category=='')

  }

  search(event:any){
    this.searchTerm = event.target.value
    //send data to behaviour subject
    this.ms.search.next(this.searchTerm)
  }
 
}
