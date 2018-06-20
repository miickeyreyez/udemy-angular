import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getQuery(query:string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const token = 'BQAqoRdMQwkortvbF7qPz0_PaEO2N2xTtFZdwCotP7ZlGFdeiWu0VvAsKvFpgTSMRSH_s1_butDHRW7LGjg';
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${token}`,
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {

    //Sin el map: return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
    /*return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
    .pipe(map(data => {
      console.log(data);
      return data['albums'].items;
    }));*/
    return this.getQuery('browse/new-releases?limit=20').pipe(map(data => {
       console.log(data);
       return data['albums'].items;
      }));
  }

  getArtista(termino:string) {

    //Sin el map: return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers });
    /*return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
    .pipe(map(data => data['artists'].items));*/
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map(data => data['artists'].items));
  }

  getArtistaId(id:string) {
    return this.getQuery(`artists/${id}`);
  }
}
