import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';
import { Lista } from '../../app/clases';
import { DetallesComponent } from '../detalles/detalles.component';

@Component({
    selector:'app-terminado',
    templateUrl:'terminado.component.html',
})

export class TerminadoComponent implements OnInit {
    constructor(private listaDeseos:ListaDeseosService, private nav:NavController) {}

    ngOnInit(){}

    verDetalle(lista:Lista, index:number){
        //console.log(lista)
        //console.log(index)
        this.nav.push(DetallesComponent, {
            lista, index
        });
        
    }
}