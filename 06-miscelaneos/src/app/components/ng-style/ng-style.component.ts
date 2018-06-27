import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="{'font-size':tamanio + 'px'}">
      Hola mundo...
    </p>
    <p [style.fontSize.px]="tamanio">
      Estamos probando el ngStyle
    </p>

    <button class="btn btn-primary" (click)="tamanio = tamanio + 5">
    <i class="fa fa-plus">
    </i>
    </button>

    <button class="btn btn-primary" (click)="tamanio = tamanio - 5">
    <i class="fa fa-minus">
    </i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamanio = 30;

  constructor() { }

  ngOnInit() {
  }

}
