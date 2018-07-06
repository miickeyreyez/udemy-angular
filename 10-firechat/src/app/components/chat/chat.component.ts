import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje:string = "";
  error:string = "";
  elemento: any;

  constructor(public chatService:ChatService) {
    this.chatService.cargarMensajes().subscribe( () => {
      setTimeout( () => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      },20)
    });
   }

  ngOnInit() {
    this.elemento = document.getElementById('app-mensajes');
  }

  enviarMensaje(){
    console.log(this.mensaje)
    if(this.mensaje.length !== 0) {
      this.error = null;
      this.chatService.agregarMensaje(this.mensaje).then(
        () => {
          this.mensaje = ""
        })
        .catch( (err) => {
          console.log(err)
        })
    } else {
      this.error = "Inserte un mensaje"
    }
  }

}
