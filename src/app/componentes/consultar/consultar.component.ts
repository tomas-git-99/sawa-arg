import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ServicioService } from '../funciones/servicio.service';



@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  
  
  @Input()nombreHijoProducto!: string;
  
  @ViewChild('botono_enviar_form')botono_enviar_form!:ElementRef<HTMLInputElement>;

  //nombreValor:string = `${this.nombreHijoProducto == null || this.nombreHijoProducto == "" ? "" :"Hola!, Me gustaría saber el precio del producto " + this.nombreHijoProducto}`;

  constructor( private _builder: FormBuilder, private service:ServicioService) {


    
  }
  myFormulario!:FormGroup;
  
  ngOnInit(): void {
    
    this.myFormulario = this._builder.group({

      nombre:  ['', Validators.required],

      email:   ['', Validators.compose([Validators.email, Validators.required])],

      mensaje: [`${this.nombreHijoProducto == null || this.nombreHijoProducto == "" ? "" :"Hola!, Me gustaría saber el precio del producto " + this.nombreHijoProducto}`, Validators.required],
    })


  }


  formulario(data:any) {
    this.botono_enviar_form.nativeElement.innerHTML = `
    <button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>
    `
   this.service.evniarFormulario(data).subscribe (data => {

    if(data.ok == true) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'El formulario se envio con exito',
        showConfirmButton: false,
        timer: 1500
      });
      this.botono_enviar_form.nativeElement.innerHTML = `<button type="submit" class="btn btn-primary btn-lg">Enviar</button>`;
      this.service.abrirProducto$.emit(false);

    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Surgio un error intento en unos minutos, si el error persistir, comunicarse directamente con: ',
        footer: '<p>Email: sawa_sm@hotmail.com, Telefono: 52933474</p>'
        
      })
    }

   })
  }


  cerrar(){
    this.nombreHijoProducto = "";
    this.service.abrirProducto$.emit(false);
  }
}
