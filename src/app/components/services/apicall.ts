import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCall {
  constructor(private httpClient:HttpClient) { } // aquí se importan las funciones que enlazan con las APIs
   //fetch a base de datos
   fetchMovies(): Observable<any>{
    return this.httpClient.get('https://project-enlace-node.vercel.app/movie')
  }  
  
}