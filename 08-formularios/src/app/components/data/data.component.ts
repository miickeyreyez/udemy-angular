import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { exists } from 'fs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  forma:FormGroup;
  usuario:any = {
    nombrecompleto: {
      nombre:"Angel",
      apellido:"Reyes"
    },
    nombre:"Miguel",
    apellido:"Martinez",
    correo:"miickeyreyez@gmail.com",
    //pasatiempos:["Correr","Dormir","Comer"]
  }

  constructor() {
    /*this.forma = new FormGroup(
      {
        'nombrecompleto':new FormGroup({
          'nombre':new FormControl(this.usuario.nombrecompleto.nombre, [Validators.required,Validators.minLength(3)]), 
          'apellido':new FormControl(this.usuario.nombrecompleto.apellido, Validators.required), 
        }),
        'nombre':new FormControl('', [Validators.required,Validators.minLength(3)]), 
        'apellido':new FormControl('', Validators.required),
        'correo':new FormControl(this.usuario.correo, [Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]), 
      }
    );*/

    this.forma = new FormGroup(
      {
        'nombrecompleto':new FormGroup({
          'nombre':new FormControl('', [Validators.required,Validators.minLength(3)]), 
          'apellido':new FormControl('', [Validators.required, this.noApellido]), 
        }),
        'nombre':new FormControl('', [Validators.required,Validators.minLength(3)]), 
        'apellido':new FormControl('', Validators.required),
        'correo':new FormControl('', [Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]), 
        'pasatiempos':new FormArray([
          new FormControl('Correr',Validators.required),
        ]),
        'username':new FormControl('',Validators.required,this.existeUsuario),
        'password1':new FormControl('',Validators.required),
        'password2':new FormControl()
      }
    );

    //this.forma.setValue(this.usuario);

    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.noIgual.bind(this.forma)
    ])

    //this.forma.valueChanges.subscribe(data => {
    this.forma.controls['username'].valueChanges.subscribe(data => {
      console.log(data)
    })
    
    this.forma.controls['username'].statusChanges.subscribe(data => {
      console.log(data)
    })
   }

  ngOnInit() {
  }

  guardarCambios() {
    console.log(this.forma)
    /*
    this.forma.controls['nombre'].setValue("");

    this.forma.reset({
      nombrecompleto: {
        nombre:"",
        apellido:""
      },
      nombre:"",
      apellido:"",
      correo:""
    });
    */
  }

  agregarpasatiempo(){
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('Dormir',Validators.required)
    )
    //console.log(this.forma.controls['pasatiempos'])
    console.log(this.forma.value)
  }

  noApellido(control:FormControl):{[s:string]:boolean}{

    if(control.value === "martinez"){
      return {
        nomartinez:true
      }
    }
    return null
  }
  
  noIgual(control:FormControl):{[s:string]:boolean}{

    let forma:any = this;
    if(control.value !== forma.controls['password1'].value){
      return {
        noigual:true
      }
    }
    return null
  }

  existeUsuario(control:FormControl): Promise<any>|Observable<any> {

    let promesa = new Promise(
      (resolve,reject) => {
        setTimeout( ()=> {
          if(control.value === "strider" ) {
            resolve({existe:true})
          } else {
            resolve(null)
          }
        }, 3000)
      }
    )
    return promesa;
  }

}
