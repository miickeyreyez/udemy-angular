import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from './heroe.interface';
import { HeroeService } from '../../services/heroe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre:"",
    casa:"Marvel",
    bio:""
  }

  nuevo:boolean = false;
  id:string;

  constructor(private hs:HeroeService, 
    private router:Router,
    private active:ActivatedRoute) {
      this.active.params.subscribe(
        params => {
            this.id = params['id']
            if(this.id !== "nuevo") {
              this.hs.getHeroe(this.id).subscribe(
                data => {
                  this.heroe = data
                }
              )
            }
        }
      )
     }

  ngOnInit() {
  }

  guardar() {
    console.log(this.heroe)

    if(this.id == "nuevo") {

    this.hs.nuevoHeroe(this.heroe)
    .subscribe(data => {
      this.router.navigate(['/heroe',data.name])
      },
    error => {
      console.log(error)
    })

    } else {

      this.hs.actualizarHeroe(this.heroe, this.id)
      .subscribe(data => {
        
        },
      error => {
        console.log(error)
      })
      
    }

  }

  agregarNuevo(forma:NgForm) {
    this.router.navigate(['/heroe','nuevo']);
    forma.reset(this.heroe);
    forma.reset({
      casa:"Marvel"
    });
  }

}
