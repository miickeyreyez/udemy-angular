import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({
  name: 'videoseguro'
})
export class VideoseguroPipe implements PipeTransform {

  constructor(private ds?:DomSanitizer) {
    
  }
  
  transform(value: any): any {
    let urlYT = "https://www.youtube.com/embed/";
    return this.ds.bypassSecurityTrustResourceUrl(urlYT + value);
  }

}
