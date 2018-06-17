import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQB9Hw7Tv-QHslPQG1RveCEpa_vI8rrzIHYGqzDGeitAbVhdx0d0N8IQHhdu84KcefI525Gm8yhjn7b66e4',
    });

    //Sin el map: return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
    .pipe(map(data => {
      console.log(data);
      return data['albums'].items;
    }));
  }

  getArtista(termino:string) {

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQB9Hw7Tv-QHslPQG1RveCEpa_vI8rrzIHYGqzDGeitAbVhdx0d0N8IQHhdu84KcefI525Gm8yhjn7b66e4',
    });

    //Sin el map: return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers })
    .pipe(map(data => data['artists'].items));
  }
}
