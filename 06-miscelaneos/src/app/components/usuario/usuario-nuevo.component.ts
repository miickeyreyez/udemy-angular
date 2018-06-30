import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styleUrls: ['./usuario-nuevo.component.css']
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private router:ActivatedRoute) { 
    this.router.parent.params.subscribe(params => {
      //id = params['id'];
    })
  }

  ngOnInit() {
  }

}
