import { Component, OnInit } from '@angular/core';
import { HeroeService } from '../../services/heroe.service';
import { Heroe } from './heroe.interface';
import { load } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];
  h:any[] = [];
  loading = true;

  constructor(private hs:HeroeService) {
    this.hs.getHeroes().subscribe(
      data => {
        setTimeout( () => {
          console.log(data)
        this.heroes = data;
        console.log(this.heroes)
        /*for(let key$ in data) {
          console.log(data[key$])
          this.h.push(data[key$])
        }*/
        this.loading = false;
        },1000)
      }
    )
   }

  ngOnInit() {
  }

  borrarHeroe(key$:string){
    this.hs.deleteHeroe(key$).subscribe(
      data => {
        console.log(data)
        if(!data) {
          delete this.heroes[key$];
        }
      }
    )
  }
}
