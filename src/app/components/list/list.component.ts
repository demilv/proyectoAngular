import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { ApiCall } from '../services/apicall';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  //Manejamos objeto, matriz de objetos y evento para componente hijo
  movies: Movie[] = [];

  constructor(private requestService:ApiCall) {}

  ngOnInit() {
    this.getMovies();
  }

 

  //Evento conectado en nuestro html para elegir una pelicula y pasarnos a componente detail en la ruta con nombre igual al titulo de la pelicula
  private getMovies(){
    this.requestService.fetchMovies().subscribe((data: Movie[]) => {
      this.movies=data;
      console.log(data)
      })
    }
}
