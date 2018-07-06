import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Mensaje } from '../components/chat/mensaje.interface';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public chats: Mensaje[] = [];
  public usuario: any = {};
  private itemsCollection: AngularFirestoreCollection<Mensaje>;

  constructor(private afs: AngularFirestore, public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      console.log(user)
      if(!user){
        return
      }
      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;
    });
  }

  login(provider:string) {
    if(provider === 'google') {
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }
    if(provider === 'twitter') {
      this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
    }
  }

  logout() {
    this.usuario = {}
    this.afAuth.auth.signOut();
  }

  cargarMensajes() {
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => 
      ref.orderBy('fecha','desc').limit(5)
  );
    //return this.itemsCollection.valueChanges();
    return this.itemsCollection.valueChanges().pipe(map(mensajes => {
      //console.log(data);
      this.chats = [];
      for(let mensaje of mensajes) {
        this.chats.unshift(mensaje);
      }
      return this.chats;
    }));
  }

  agregarMensaje(texto: string) {

    let mensaje: Mensaje = {
      nombre:this.usuario.nombre,
      mensaje:texto,
      fecha:new Date().getTime(),
      uid:this.usuario.uid
    }

    return this.itemsCollection.add(mensaje)

  }

}
