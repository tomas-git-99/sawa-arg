import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../funciones/servicio.service';

@Component({
  selector: 'app-view-producto',
  templateUrl: './view-producto.component.html',
  styleUrls: ['./view-producto.component.css']
})
export class ViewProductoComponent implements OnInit {

  constructor(private service: ServicioService) { }

  ngOnInit(): void {
  }

  onSalir(){
    
    this.service.loadScript("https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js");

    this.service.salirProducto$.emit(false);
  }
}
