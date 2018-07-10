import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = []

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(public snackBar: MatSnackBar, public dialog:MatDialog) {

    if(localStorage.getItem('marcadores')) {
      console.log(localStorage.getItem('marcadores'))
      console.log(JSON.stringify(localStorage.getItem('marcadores')))
      console.log(JSON.parse(localStorage.getItem('marcadores')))
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'))
    }
    const nuevoMarcador = new Marcador(51.678418,7.809007);
    this.marcadores.push(nuevoMarcador);

   }

  ngOnInit() {
  }

  agregarMarcador(event){
    console.log(event)
    const nuevoMarcador = new Marcador(event.coords.lat,event.coords.lng);
    this.marcadores.push(nuevoMarcador);
    this.guardarStorage();
    this.openSnackBar("Marcador agregado","Aceptar");
  }

  guardarStorage() {
    localStorage.setItem('marcadores',JSON.stringify(this.marcadores));
  }

  borrarStorage(index) {
    this.marcadores.splice(index,1);
    this.guardarStorage();
    this.openSnackBar("Marcador eliminado","Aceptar");
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  editarMapa(marcador:Marcador) {
    let animal: string;
    let name: string;
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: {titulo: marcador.title, desc: marcador.desc}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      if(result) {
        marcador.title = result.titulo;
        marcador.desc = result.desc;
        this.guardarStorage();
        this.openSnackBar("Marcador actualizado","Aceptar")
      }
    });
  }

}
