import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  constructor(private router:ActivatedRoute) { 
    this.router.params.subscribe( params => {

    });
  }

  ngOnInit() {
  }

}
