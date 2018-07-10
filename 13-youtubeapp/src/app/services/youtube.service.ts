import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  googleKey:string = "AIzaSyDy_9XvCfwhsVnZHOGpkV05x1M1EuCsdGI"
  uploads:string = "UUl7awr3nf-hnu-cIuLOGqnA"
  url:string = "https://www.googleapis.com/youtube/v3"
  playlist:string = "/playlistItems"
  nextPageToken:string = "";

  constructor(private http:Http) { }

  getVideos() {
    let url = `${this.url}${this.playlist}`
    let params = new URLSearchParams();
    params.set('part','snippet')
    params.set('maxResults','10')
    params.set('playlistId',this.uploads)
    params.set('key',this.googleKey)
    if(this.nextPageToken) {
      params.set('pageToken',this.nextPageToken)
    }
    return this.http.get(url,{search:params}).
    pipe(map(res => {
      console.log(res)
      console.log(res.json())
      this.nextPageToken = res.json().nextPageToken;
      let videos:any[] = [];
      for(let video of res.json().items) {
        let snippet = video.snippet
        videos.push(snippet)
      }
      return videos
    }))
  }
}
