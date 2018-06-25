import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';
import { Lista } from '../../app/clases';
import { DetallesComponent } from '../detalles/detalles.component';

@Component({
    selector:'app-pendientes',
    templateUrl:'pendientes.component.html',
})

export class pendientesComponent implements OnInit {
    constructor(private listaDeseos:ListaDeseosService, private nav:NavController) {}

    ngOnInit(){
        //console.log(this.listaDeseos.listas.length)
    }

    irAgregar() {
        this.nav.push(AgregarComponent);
    }

    verDetalle(lista:Lista, index:number){
        //console.log(lista)
        //console.log(index)
        this.nav.push(DetallesComponent, {
            lista, index
        });
        
    }
}