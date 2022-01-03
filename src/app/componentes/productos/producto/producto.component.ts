import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

import Productos from '../../../../assets/productos.json';
import { ServicioService } from '../../funciones/servicio.service';
import {ChangeDetectorRef} from '@angular/core';
import Flickity from 'flickity';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {


  productos:any = Productos;


 
  constructor(private renderer: Renderer2, private servicio:ServicioService, private cdr: ChangeDetectorRef) { 
    
  }
  
  ngOnInit(): void {
   
  
  }
  abrir(){
    this.servicio.loadScript("https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js");

    this.servicio.salirProducto$.emit(true);
  }

  
}
