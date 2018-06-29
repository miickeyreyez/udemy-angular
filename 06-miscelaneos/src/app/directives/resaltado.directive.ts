import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.backgroundColor = "yellow"
   }

   @Input("appResaltado") nuevoColor:string;

   @HostListener('mouseenter') mouseEntro() {
     this.el.nativeElement.style.backgroundColor = this.nuevoColor;
   } 

   @HostListener('mouseleave') mouseSalio() {
     this.el.nativeElement.style.backgroundColor = "cyan";
   } 
}
