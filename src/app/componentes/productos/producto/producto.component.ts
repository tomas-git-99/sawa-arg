import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

import Productos from '../../../../assets/productos.json';
import { ServicioService } from '../../funciones/servicio.service';
import {ChangeDetectorRef} from '@angular/core';
import Flickity from 'flickity';
import { Observable } from 'rxjs';
import { ServiciosService } from '../../servicios.service';

import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {


 

  productos:any = Productos;
  estado:boolean = false;

  @Output() nombreDeProducto: EventEmitter<string> = new EventEmitter();

 
  constructor(
    public translate: TranslateService,
    private renderer: Renderer2, 
    private servicio:ServicioService,
    private cdr: ChangeDetectorRef,
    private srs:ServiciosService,
     
     ) { 
      translate.addLangs(['en', 'es']);
      translate.setDefaultLang('es');
  
  
      const browserLang:any = translate.getBrowserLang();
      translate.use(browserLang.match(/en|es/) ? browserLang : 'es'); 
  }
  
  ngOnInit(): void {
/*     this.servicio.abrirProducto$.subscribe( data => {
      this.estado = data;
    })
    */
    
  }
  abrir(event:string | number){
    
    let data = this.servicio.cargarInfo(event);
    
    
    
    
    this.servicio.loadScript("https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js");
    this.servicio.salirProducto$.emit(true);
    
    this.servicio.datosProducto$.emit(event);
    this.servicio.dataProducto$.emit(data);


  }

  abrirConsulta(id:string | number){
    

    let producto = this.servicio.cargarInfo(id);
this.nombreDeProducto.emit(producto.nombre)
    this.servicio.abrirProducto$.emit(true);

  
  
    
  }
}
