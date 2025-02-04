import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  movieList = 
  [
    {id: 1, title: 'The Shawshank Redemption', year: 1994, director: 'Frank Darabont'},
    {id: 2, title: 'The Godfather', year: 1972, director: 'Francis Ford Coppola'},
    {id: 3, title: 'The Dark Knight', year: 2008, director: 'Christopher Nolan'},
    {id: 4, title: 'Pulp Fiction', year: 1994, director: 'Quentin Tarantino'},
    {id: 5, title: 'Forrest Gump', year: 1994, director: 'Robert Zemeckis'},
    {id: 6, title: 'The Matrix', year: 1999, director: 'Lana Wachowski, Lilly Wachowski'},
    {id: 7, title: 'Inception', year: 2010, director: 'Christopher Nolan'},
    {id: 8, title: 'Fight Club', year: 1999, director: 'David Fincher'},
    {id: 9, title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, director: 'Peter Jackson'},
    {id: 10, title: 'The Empire Strikes Back', year: 1980, director: 'Irvin Kershner'}
  ];

  getmovie()
  {
    return this.movieList;
  }
}
