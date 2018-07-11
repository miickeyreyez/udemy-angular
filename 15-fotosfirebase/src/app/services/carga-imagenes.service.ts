import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase'
import { FileItem } from '../model/file-item.model';

@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  private CARPETA_IMAGENES = 'img'
  items: Observable<any[]>;
  constructor(private db: AngularFirestore) {
    //this.items = this.db.collection('img').valueChanges();
  }

  private guardarImagen(imagen:{nombre:string, url:string}) {
    console.log(imagen)
    this.db.collection(`/${ this.CARPETA_IMAGENES }`)
            .add( imagen );
  }

  cargarImagenesFirebase(imagenes:FileItem[]) {
    console.log(imagenes)
    const storageRef = firebase.storage().ref();
    for(const item of imagenes) {
      item.estaSubiendo = true;
      if(item.progreso >= 100) {
        continue;
      }
      const referenciaImagen = storageRef.child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`);
      const uploadTask:firebase.storage.UploadTask = 
        referenciaImagen.put(item.archivo);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
          (snapshot: firebase.storage.UploadTaskSnapshot) => item.progreso = (snapshot.bytesTransferred/snapshot.totalBytes) * 100,
          (error) => console.log("Error al subir", error),
          () => {
            referenciaImagen.getDownloadURL().then(
              (urlImagen) => {
                console.log('Imagen cargada correctamente')
                item.url = urlImagen;
                item.estaSubiendo = false;
                this.guardarImagen({
                  nombre:item.nombreArchivo,
                  url:item.url
                })
              },
              (error) => console.log("Error: " + error)
            )
          }

        ) 
    }
  }

}
