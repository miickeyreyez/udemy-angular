import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { CargaImagenesService } from '../../services/carga-imagenes.service';
export interface Item {nombre:string; url:string;}

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

  items: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.items = db.collection('img').valueChanges();
  }

  ngOnInit() {
  }

}
