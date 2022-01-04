import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicioService } from '../funciones/servicio.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  myFormulario!:FormGroup;


  constructor(  private _builder: FormBuilder, private service:ServicioService) { 
    this.myFormulario = this._builder.group({
      nombre:  ['', Validators.required],
      email:   ['', Validators.compose([Validators.email, Validators.required])],
      mensaje: ['', Validators.required],
    })
  }
  
  ngOnInit(): void {


  }


  formulario(data:any) {
    console.log(data);
  }
}
