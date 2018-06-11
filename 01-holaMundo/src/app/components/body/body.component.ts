import {Component} from '@angular/core';

@Component ({
    selector: 'body-component',
    templateUrl: './body.component.html',
})

export class BodyComponent {

    mostrar = true;

    frase: any = {
        mensaje: 'FIFA World Cup',
        submensaje: 'Russia 2018'
    };

    showHide() {
        this.mostrar = !this.mostrar;
    }

    paises: string[] = ['Francia','Argentina','México','Brasil','Rusia'];
}