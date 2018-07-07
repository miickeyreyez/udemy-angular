import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private pS:PeliculasService) {
    this.pS.getPopulares().subscribe(data => {
      console.log(data)
    })
  }
}
