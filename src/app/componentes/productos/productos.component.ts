import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../funciones/servicio.service';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  estado: boolean = false;
  constructor(private service:ServicioService) { 
  }


  ngOnInit(): void {
    
    this.service.salirProducto$.subscribe( e => {
      this.estado = e;
    })

    
  }


  
  
}
