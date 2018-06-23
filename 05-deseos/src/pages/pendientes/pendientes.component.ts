import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';

@Component({
    selector:'app-pendientes',
    templateUrl:'pendientes.component.html',
})

export class pendientesComponent implements OnInit {
    constructor(private listaDeseos:ListaDeseosService, private nav:NavController) {}

    ngOnInit(){}

    irAgregar() {
        this.nav.push(AgregarComponent);
    }
}