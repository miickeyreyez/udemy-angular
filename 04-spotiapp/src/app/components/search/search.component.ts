import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas:any[] = [];
  loading:boolean = false;

  constructor(private spotify:SpotifyService) { 
    
  }
    
  ngOnInit() {
  }

  buscar(termino:string){
    this.loading = true;
    this.spotify.getArtista(termino).subscribe(
      (data:any) => {
        //Sin el map: this.artistas = data.artists.items;
        console.log(data);
        this.artistas = data;
        this.loading = false;
      }
    );
  }

}
