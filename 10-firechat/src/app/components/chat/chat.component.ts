import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje:string = "";

  constructor() { }

  ngOnInit() {
  }

  enviarMensaje(form:NgForm){
    console.log(this.mensaje)
  }

}
