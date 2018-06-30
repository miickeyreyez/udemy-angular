import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

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
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  ngOnChanges(): void {
    throw new Error("Method not implemented.");
  }
  ngDoCheck(): void {
    throw new Error("Method not implemented.");
  }
  ngAfterContentInit(): void {
    throw new Error("Method not implemented.");
  }
  ngAfterContentChecked(): void {
    throw new Error("Method not implemented.");
  }
  ngAfterViewInit(): void {
    throw new Error("Method not implemented.");
  }
  ngAfterViewChecked(): void {
    throw new Error("Method not implemented.");
  }
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

  constructor() { }

  ngOnInit() {
  }

}
