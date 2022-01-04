import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  constructor( private _builder: FormBuilder) { 
    this.myFormulario = this._builder.group({
      nombre:  ['', Validators.required],
      email:   ['', Validators.compose([Validators.email, Validators.required])],
      mensaje: ['', Validators.required],
    })
  }
  myFormulario!:FormGroup;

  ngOnInit(): void {
  }
  formulario(data:any) {
    console.log(data);
  }
}
