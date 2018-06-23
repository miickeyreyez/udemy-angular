import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { Lista, ListaItem } from '../../app/clases/index';

@Component({
    selector:'app-agregar',
    templateUrl:'agregar.component.html',
})

export class AgregarComponent implements OnInit {

    nombreLista:string;
    nombreItem:string = "";

    items:ListaItem[] = [];

    constructor(private listaDeseos:ListaDeseosService) {}

    ngOnInit(){}

    agregar() {
        if(this.nombreItem.length == 0) {
            return;
        }

        let item = new ListaItem();
        item.nombre = this.nombreItem;
        this.items.push(item);
        this.nombreItem = ""
    }

    borrar(i) {
        console.log(i);
        if(this.items.length > 0) {
            this.items.splice(i,1);
        }
    }
}