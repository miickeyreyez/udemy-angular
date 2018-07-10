import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormBuilder, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {

  public titulo;
  public descripcion;
  forma: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<MapaEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public fb:FormBuilder) {
      this.forma = fb.group({
      'desc' : data.desc,
      'titulo' : data.titulo
      })
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editarMarcador() {
    this.dialogRef.close(this.forma.value)
  }

  ngOnInit() {
  }

}
