import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/clases';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { AlertController } from 'ionic-angular';
import { convertUrlToDehydratedSegments } from 'ionic-angular/umd/navigation/url-serializer';

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
        public listaDeseos:ListaDeseosService,
        public alertCtrl: AlertController
    ) {
        this.index = this.navParams.get("index");
        this.lista = this.navParams.get("lista");
     }

    ngOnInit() {

    }

    actualizar(item:ListaItem) {
        item.completado = !item.completado;
        let todosMarcados = true;
        for(let item of this.lista.listaItem) {
            if(!item.completado){
              todosMarcados = false;
              break;  
            }
        }
        this.lista.terminada = todosMarcados;
        console.log(this.lista)
        this.listaDeseos.actualizarData();
    }

    borrarLista() {
        const confirm = this.alertCtrl.create({
            title: this.lista.nombre,
            message: 'Desea eliminar el elemento?',
            buttons: [
              {
                text: 'Cancelar',
                handler: () => {
                  console.log('Disagree clicked');
                }
              },
              {
                text: 'Aceptar',
                handler: () => {
                  console.log('Agree clicked');
                  this.listaDeseos.eliminarLista(this.index);
                  this.navCtrl.pop();
                }
              }
            ]
          });
          confirm.present();
    }
}