import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey = "257041c7e1170f969d544800db242d0b";
  private urlMoviedb = "https://api.themoviedb.org/3";
  peliculas:any[] = [];

  constructor(private http:HttpClient) {

   }

  getPopulares() {
    let url = `${this.urlMoviedb}/discover/movie?api_key=${this.apikey}&language=en-US&sort_by=popularity.desc`
    return this.http.get(url)
    /*.pipe(map(res => {
      console.log(res)
    }));*/
  }
  
  getPopularesKids() {
    //let url = `${this.urlMoviedb}/discover/movie?api_key=${this.apikey}&language=en-UScertification_country=US&certification.lte=G&sort_by=popularity.desc`
    let url = `${this.urlMoviedb}/discover/movie?api_key=${this.apikey}&language=ES&region=MX&sort_by=popularity.desc&certification_country=MX&certification.lte=G`
    return this.http.get(url)
    /*.pipe(map(res => {
      console.log(res)
    }));*/
  }

  buscarPelicula(texto:string) {
    let url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&language=en-US&api_key=${this.apikey}`
    return this.http.get(url).pipe(map(res => {
      this.peliculas = res.results;
      console.log(this.peliculas)
    }))
  }

  getCartelera() {
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate()  + 7);

    let desdeStr = `${desde.getFullYear()}-${desde.getMonth()+1}-${desde.getDay()}`
    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth()+1}-${hasta.getDay()}`

    let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&language=en-US&api_key=${this.apikey}`
    return this.http.get(url)
  }

  getPelicula(id:string) {
    let url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apikey}&language=en-US`
    return this.http.get(url)
  }
}