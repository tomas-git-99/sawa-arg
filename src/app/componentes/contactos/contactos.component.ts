import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  
  constructor() { }
  myFormulario = FormGroup;
  
  ngOnInit(): void {
  }


  formulario() {
    myFormulario = new FormGroup({
      nombre:
    })
  }
}
