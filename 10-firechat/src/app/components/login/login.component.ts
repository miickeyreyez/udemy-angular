import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private chatService:ChatService) { }

  ngOnInit() {
  }

  ingresar(provider:string) {
      this.chatService.login(provider);
  }
}
