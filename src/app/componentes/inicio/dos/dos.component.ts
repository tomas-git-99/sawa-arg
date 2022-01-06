import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ServicioService } from '../../funciones/servicio.service';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.css']
})
export class DosComponent implements OnInit {

  @Output() nombreDeProducto: EventEmitter<string> = new EventEmitter();

  constructor(public translate: TranslateService, private service:ServicioService) { 
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

  abrirConsulta(id:string | number){

    let producto = this.service.cargarInfo(id);


    this.nombreDeProducto.emit(producto.nombre)
    
    this.service.abrirProducto$.emit(true);

  }

}
