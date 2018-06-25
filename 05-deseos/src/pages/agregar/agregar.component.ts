import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { Lista, ListaItem } from '../../app/clases/index';
import { AlertController, NavController } from 'ionic-angular';

@Component({
    selector:'app-agregar',
    templateUrl:'agregar.component.html',
})

export class AgregarComponent implements OnInit {

    nombreLista:string = "";
    nombreItem:string = "";

    items:ListaItem[] = [];

    constructor(private navCtrl:NavController, private listaDeseos:ListaDeseosService, public alertCtrl: AlertController) {
        
    }

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

    guardarLista() {
        if(this.nombreLista.length == 0) {
            const alert = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'El nombre de la lista es obligatorio',
                buttons: ['OK']
              });
            alert.present();
        }

        else {
            let lista = new Lista(this.nombreLista);
            lista.listaItem = this.items;

            //this.listaDeseos.listas.push(lista);
            this.listaDeseos.agregarLista(lista);

            this.navCtrl.pop();
        }

    }
}