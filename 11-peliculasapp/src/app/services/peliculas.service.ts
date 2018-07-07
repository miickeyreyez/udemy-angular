import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey = "257041c7e1170f969d544800db242d0b";
  private urlMoviedb = "https://api.themoviedb.org/3";

  constructor(private http:HttpClient) {

   }

  getPopulares() {
    let url = `${this.urlMoviedb}/discover/movie?api_key=${this.apikey}&language=en-US&sort_by=popularity.desc`
    return this.http.get(url)
    /*.pipe(map(res => {
      console.log(res)
    }));*/
  }

  buscarPelicula(texto:string) {
    let url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desclanguage=en-US&api_key=${this.apikey}`
    return this.http.get(url)
  }
}
