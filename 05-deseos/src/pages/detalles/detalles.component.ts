import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/clases';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
    selector:'app-detalles',
    templateUrl:'detalles.component.html',
})

export class DetallesComponent implements OnInit {

    index:number;
    lista:Lista;

    constructor(
        public navCtrl:NavController,
        public navParams:NavParams,
        public listaDeseos:ListaDeseosService
    ) {
        this.index = this.navParams.get("index");
        this.lista = this.navParams.get("lista");
     }

    ngOnInit() {

    }

    actualizar(item:ListaItem) {
        item.completado = !item.completado;
        this.listaDeseos.actualizarData();
    }
}