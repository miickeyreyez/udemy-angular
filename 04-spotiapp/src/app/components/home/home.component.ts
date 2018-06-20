import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paises: any[] = [];
  nuevasCanciones: any[] = [];
  loading: boolean = true;
  error: boolean = false;
  errorMensaje: string;

  constructor(private http:HttpClient, private spotify:SpotifyService) { 
    
    this.http.get('https://restcountries.eu/rest/v2/all').subscribe(
      (response:any) => {
        //console.log(response);
        this.paises = response;
      }
    );

    this.spotify.getNewReleases().subscribe(
      (data: any) => {
        //Sin el map. this.nuevasCanciones = data.albums.items;
        this.nuevasCanciones = data;
        //console.log(this.nuevasCanciones)
        this.loading = false;
      } ,
      (error) => {
        console.log(error);
        this.loading = false;
        this.error = true;
        this.errorMensaje = error.error.error.message;
      });
    
  }

  ngOnInit() {
  }

}
