import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ServicioService } from '../../funciones/servicio.service';


import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.css']
})
export class UnoComponent implements OnInit {

  

  @Input()nombreHijoProducto_uno!: string;

  @Output() nombreDeProducto: EventEmitter<string> = new EventEmitter();
/* 
  esp:any = data_esp;
 */
  constructor(public translate: TranslateService, private servicio:ServicioService, ) { 
/*     translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');


    const browserLang:any = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang : 'es'); */

  }

  ngOnInit(): void {
  }

  abrirConsulta(){
  
    this.servicio.abrirProducto$.emit(true);


    this.nombreDeProducto.emit(""); 

  }

}
