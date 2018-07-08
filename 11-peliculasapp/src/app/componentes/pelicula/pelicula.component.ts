import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  pelicula:any = {};
  regresar:string = "";
  busqueda:string = "";

  constructor(private route:ActivatedRoute, private ps:PeliculasService) {
    this.route.params.subscribe(params => {
      console.log(params)
      if(params['busqueda']) {
        this.busqueda = params['busqueda'];
      }

      if(params['id'] && params['page']){
        this.regresar = params['page'];
        this.ps.getPelicula(params['id']).subscribe(res => {
          console.log(res)
          this.pelicula = res;
        });
      }
    })
   }

  ngOnInit() {
  }

}
