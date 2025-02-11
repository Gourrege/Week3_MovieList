import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  movieList = 
  [
    {title: 'The Shawshank Redemption', year: 1994, director: 'Frank Darabont'},
    {title: 'The Godfather', year: 1972, director: 'Francis Ford Coppola'},
    {title: 'The Dark Knight', year: 2008, director: 'Christopher Nolan'},
    {title: 'Pulp Fiction', year: 1994, director: 'Quentin Tarantino'},
    {title: 'Forrest Gump', year: 1994, director: 'Robert Zemeckis'},
    {title: 'The Matrix', year: 1999, director: 'Lana Wachowski, Lilly Wachowski'},
    {title: 'Inception', year: 2010, director: 'Christopher Nolan'},
    {title: 'Fight Club', year: 1999, director: 'David Fincher'},
    {title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, director: 'Peter Jackson'},
    {title: 'The Empire Strikes Back', year: 1980, director: 'Irvin Kershner'}
  ];

  getmovie()
  {
    return this.movieList;
  }

  addMovie(movietitle:string, moviedirector:string, movieyear:number)
  {
    this.movieList.push({title:movietitle, director:moviedirector, year:movieyear})

  }
}
