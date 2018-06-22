import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
    selector:'app-pendientes',
    templateUrl:'pendientes.component.html',
})

export class pendientesComponent implements OnInit {
    constructor(private listaDeseos:ListaDeseosService) {}

    ngOnInit(){}
}