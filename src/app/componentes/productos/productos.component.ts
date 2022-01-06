import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServicioService } from '../funciones/servicio.service';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  estado: boolean = false;
  estadoConsulta:boolean = false;
  nombre: any;

  datos_productos:any;

  constructor(private service:ServicioService) { 
  }


  ngOnInit(): void {


    this.service.datosProducto$.subscribe(e => {

     this.nombre = e
    })
    
    this.service.salirProducto$.subscribe( e => {

      this.estado = e;

    })

    this.service.abrirProducto$.subscribe( e => {
      this.estadoConsulta = e;
    })

 
    
  }




  
  
}
