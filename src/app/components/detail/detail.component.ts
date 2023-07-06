import { Component, OnInit  } from '@angular/core';
import { Movie } from '../../models/movie';
import { ApiCall } from '../services/apicall';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  movie: Movie | undefined;
  constructor(private ruta:ActivatedRoute, private requestService:ApiCall) { 
  }

  ngOnInit() {
    this.ruta.params.subscribe(params=>{
      const id = params['id'];
      this.getMovieSpecific(id);
      });
      }

      private getMovieSpecific(id:string){
        this.requestService.fetchMovies().subscribe((data: Movie[]) => {
          this.movie=data.find(movie => movie._id === id);          
          })
      }    
     
}
