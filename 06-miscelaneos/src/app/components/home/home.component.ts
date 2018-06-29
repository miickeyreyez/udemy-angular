import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style>

  </app-ng-style>

  <app-css></app-css>

  <p>Práctica ngServe</p>

  <app-classes></app-classes>

  <P [appResaltado]="'orange'">Hola mundo</P>

  <app-ng-switch></app-ng-switch>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
