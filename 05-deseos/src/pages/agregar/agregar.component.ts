import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
    selector:'app-agregar',
    templateUrl:'agregar.component.html',
})

export class AgregarComponent implements OnInit {

    nombreLista:string;
    nombreItem:string;

    constructor(private listaDeseos:ListaDeseosService) {}

    ngOnInit(){}
}