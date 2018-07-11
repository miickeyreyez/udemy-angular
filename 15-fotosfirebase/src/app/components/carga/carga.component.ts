import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../model/file-item.model';
import { CargaImagenesService } from '../../services/carga-imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  estaSobreDrop = false;
  archivos: FileItem[] = [];

  constructor(public ci:CargaImagenesService) { }

  ngOnInit() {
  }

  cargarImagenes() {
    this.ci.cargarImagenesFirebase(this.archivos)
  }

  pruebasSobreElemento(event){
    console.log(event)
  }

  limpiarArchivos() {
    this.archivos = [];
  }
}
