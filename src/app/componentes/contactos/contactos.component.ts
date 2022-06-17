import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ServicioService } from '../funciones/servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  myFormulario!:FormGroup;

  @ViewChild('botono_enviar_form')botono_enviar_form!:ElementRef<HTMLInputElement>;
  constructor( public translate: TranslateService, private _builder: FormBuilder, private service:ServicioService) { 
    this.myFormulario = this._builder.group({
      nombre:  ['', Validators.required],
      email:   ['', Validators.compose([Validators.email, Validators.required])],
      mensaje: ['', Validators.required],
    })
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');

/*     translate.get('inicio').subscribe( result => {
      console.log(result.descripcion);
    }) */
    const browserLang:any = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang : 'es');

  }
  
  ngOnInit(): void {


  }


  formulario(data:any) {
    this.botono_enviar_form.nativeElement.innerHTML = `
    <button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>
    `
    this.service.evniarFormulario(data).subscribe( dato => {

    if(dato.ok == true) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'El formulario se envio con exito',
        showConfirmButton: false,
        timer: 1500
      });
      this.botono_enviar_form.nativeElement.innerHTML = `<button type="submit" class="btn btn-primary btn-lg">Enviar</button>`;
      

    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Surgio un error intento en unos minutos, si el error persistir, comunicarse directamente con: ',
        footer: '<p>Email: sawa_sm@hotmail.com, Telefono: 52933474</p>'
        
      })
      this.botono_enviar_form.nativeElement.innerHTML = `<button type="submit" class="btn btn-primary btn-lg">Enviar</button>`;
    }
    })
  }
}
