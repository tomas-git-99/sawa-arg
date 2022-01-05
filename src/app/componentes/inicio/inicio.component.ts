import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../funciones/servicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombreHijo:string = '';
  estadoConsulta: boolean = false;
  constructor(private servicio:ServicioService) { 
  /*   this.servicio.loadScript("https://unpkg.com/flickity@2/dist/flickity.min.css") */
    this.servicio.loadScript("https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js");


  }

  ngOnInit(): void {

    this.servicio.abrirProducto$.subscribe( e => {
      this.estadoConsulta = e;
    })
  }

}
