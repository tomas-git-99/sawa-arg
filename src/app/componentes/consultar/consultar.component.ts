import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicioService } from '../funciones/servicio.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  
  
  @Input()nombreHijoProducto!: string;
  nombreValor:string = this.nombreHijoProducto;

  constructor( private _builder: FormBuilder, private service:ServicioService) { 
  }
  myFormulario!:FormGroup;
  
  ngOnInit(): void {
    
    this.myFormulario = this._builder.group({
      nombre:  ['', Validators.required],
      email:   ['', Validators.compose([Validators.email, Validators.required])],
      message: [`Hola!, Me gustaría saber el precio del producto ${this.nombreHijoProducto}`, Validators.required],
    })
    

  }

  async formulario(data:any) {

   /* const dato = new FormData(data); */

   const res = await fetch("https://formspree.io/f/xayvnloz",{
     method: "POST",
     body: data,
     headers:{      'Accept': 'application/json',
     'Content-Type': 'application/x-www-form-urlencoded'}
   })

   if(res.ok){

    console.log(res)
   }else{
     console.log(res)
   }

  }


  cerrar(){
    this.service.abrirProducto$.emit(false);
  }
}
