import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario:Object = {
    nombre:null,
    apellido:null,
    correo:null,
    pais:"MEX",
    sexo:"H",
    aceptar:false
  }

  paises = [
  {
    codigo:"MEX",
    pais:"México"
  },
  {
    codigo:"CRI",
    pais:"Costa Rica"
  },
  {
    codigo:"ESP",
    pais:"España"
  }]
  
  sexos:string[] = ["H","M"]
  constructor() { }

  ngOnInit() {
  }

  guardar(form:NgForm) {
    console.log(form)
  }

}
