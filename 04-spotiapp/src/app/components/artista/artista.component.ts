import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artistas',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista:any = {};
  loadingArtist:boolean;

  constructor(private router:ActivatedRoute, private spotify:SpotifyService) { 
    this.loadingArtist = true;
    this.router.params.subscribe( params => {
      this.getArtista(params['id']);
    });
  }

  ngOnInit() {
  }

  getArtista(id:string) {
    this.loadingArtist = true;
    this.spotify.getArtistaId(id).subscribe( artista => {
      console.log(artista);
      this.artista = artista;
      this.loadingArtist = false;
    });
  }

}
