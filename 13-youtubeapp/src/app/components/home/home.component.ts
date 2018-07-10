import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos :any[] = []
  videoSel:any;

  constructor(private ys:YoutubeService) {
    this.ys.getVideos().subscribe(videos => {
      console.log(videos)
      this.videos = videos;
    });
   }

  ngOnInit() {
  }

  verVideo(video) {
    this.videoSel = video;
    $('#exampleModal').modal();
  }

  cerrarModal() {
    this.videoSel = null;
    $('#exampleModal').modal('hide');
  }

  cargarMas() {
    this.ys.getVideos().subscribe(
      videos => {
        console.log(this.videos)
        console.log(videos)
        this.videos.push.apply(this.videos, videos)
        /*for(let video of videos) {
          this.videos.push(videos)
        }*/
        //this.videos.concat(videos)
        console.log(this.videos)
      }
    );
  }
}
