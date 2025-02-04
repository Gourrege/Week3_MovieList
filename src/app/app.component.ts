import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MovieService} from './movie.service'


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Week3_MovieList';

  movie:any[]=[]

  constructor(private movieService:MovieService){}

  ngOnInit()
  {
    this.movie=this.movieService.getmovie();
    console.log(this.movie);

  }
  

  
}
