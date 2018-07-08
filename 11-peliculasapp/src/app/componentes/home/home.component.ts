import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cartelera:any;
  populares:any;
  ninios:any;
  public title:string = "Cartelera"
  public title2:string = "Populares"
  public title3:string = "Niños"

  constructor(private ps:PeliculasService) { 
    this.ps.getCartelera().subscribe(data => {
      //console.log(data)
      this.cartelera = data.results;
      //console.log("Cartelera: " + this.cartelera)
    })
    this.ps.getPopulares().subscribe(data => {
      //console.log(data)
      this.populares = data.results;
      //console.log("Cartelera: " + this.populares)
    })
    this.ps.getPopularesKids().subscribe(data => {
      //console.log(data)
      this.ninios = data.results;
      //console.log("Cartelera: " + this.ninios)
    })
  }

  ngOnInit() {
  }

}
