import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Lista } from '../../app/clases';

@Component({
    selector:'app-detalles',
    templateUrl:'detalles.component.html',
})

export class DetallesComponent implements OnInit {

    index:number;
    lista:Lista;

    constructor(
        public navCtrl:NavController,
        public navParams:NavParams
    ) {
        this.index = this.navParams.get("index");
        this.lista = this.navParams.get("lista");
     }

    ngOnInit() {

    }
}