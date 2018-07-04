import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../components/heroes/heroe.interface';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  url="https://heroesapp-a7cfa.firebaseio.com/heroes.json"
  heroesUrl="https://heroesapp-a7cfa.firebaseio.com/heroes/"

  constructor(private http:Http) { }

  nuevoHeroe(heroe:Heroe) {
    let body = JSON.stringify(heroe)
    console.log(body)
    let headers = new Headers({
      'Content-Type':'application/json'
    })
    
    return this.http.post(this.url,body, { headers })
    .map(
      res => {
        //console.log(res)
        console.log(res.json())
        return res.json();
      }
    )
  }
  
  actualizarHeroe(heroe:Heroe, key$:string) {
    let body = JSON.stringify(heroe)
    console.log(body)
    let headers = new Headers({
      'Content-Type':'application/json'
    })
    
    let url = `${this.heroesUrl}/${key$}.json`

    return this.http.put(url,body, { headers })
    .map(
      res => {
        //console.log(res)
        console.log(res.json())
        return res.json();
      }
    )
  }

  getHeroe(key$:string) {
    let url = `${this.heroesUrl}/${key$}.json`
    return this.http.get(url).map(
      res => {
        return res.json();
      }
    )
  }
  
  getHeroes() {
    return this.http.get(this.url).map(
      res => {
        return res.json();
      }
    )
  }

  deleteHeroe(key$:string) {
    let url = `${this.heroesUrl}/${key$}.json`
    return this.http.delete(url).map(
      res => {
        return res.json();
      }
    )
  }

}
