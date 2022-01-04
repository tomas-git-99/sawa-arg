import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../funciones/servicio.service';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.css']
})
export class DosComponent implements OnInit {

  constructor(private service:ServicioService) { }

  ngOnInit(): void {
  }

  abrirConsulta(id:string | number){
    let producto = this.service.cargarInfo(id);

    console.log(producto.nombre);
    this.service.abrirProducto$.emit(true);
  }

}
