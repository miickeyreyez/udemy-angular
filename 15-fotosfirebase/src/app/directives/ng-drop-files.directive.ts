import { Directive, EventEmitter, 
  ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../model/file-item.model';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  constructor() { }

  @Input() archivos:FileItem[] = [];
  @Output() mouseSobre:EventEmitter<boolean> = new EventEmitter();

  @HostListener('dragover',['$event'])
  public onDragEnter(event:any) {
    this.mouseSobre.emit(true); 
    this.prevenirDetener(event);
  }
  
  @HostListener('dragleave',['$event'])
  public onDragLeave(event:any) {
    this.mouseSobre.emit(false); 
    this.prevenirDetener(event);
  }
  
  @HostListener('drop',['$event'])
  public onDrop(event:any) {
    const transferencia = this.getTransferencia(event);
    if(!transferencia) {
      return;
    }
    this.extraerArchivos(transferencia.files);
    this.prevenirDetener(event);
    this.mouseSobre.emit(false); 
  }

  private getTransferencia(event:any) {
    return event.dataTransfer ? event.dataTransfer: event.originalEvent.dataTransfer;
  }

  private extraerArchivos(archivosLista:FileList) {
    console.log(archivosLista)
    for(const propiedad in Object.getOwnPropertyNames(archivosLista)) {
      console.log(archivosLista[propiedad])
      const archivoTemporal = archivosLista[propiedad]
      if(this.archivoPuedeSerCargado(archivoTemporal)) {
        const nuevoArchivo = new FileItem(archivoTemporal)
        this.archivos.push(nuevoArchivo)
      }
    }
    console.log(this.archivos)
  }

  //Validaciones
  private archivoPuedeSerCargado(archivo:File):boolean {
    if(!this.archivoFueArrastrado(archivo.name) && this.esImagen(archivo.type)) {
      return true;
    }
    return false;
  }

  private prevenirDetener(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  private archivoFueArrastrado(nombre:string):boolean {
    for(const archivo of this.archivos) {
      if(archivo.nombreArchivo === nombre) {
        console.log('El archivo ' + nombre + 'ya había sido agregado')
        return true;
      }
    }
    return false;
  }

  private esImagen(tipoArchivo:string):boolean {
    return (tipoArchivo === '' || tipoArchivo === undefined) ? false: tipoArchivo.startsWith('image');
  }

}
