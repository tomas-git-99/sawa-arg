import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ServicioService } from '../../funciones/servicio.service';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.css']
})
export class DosComponent implements OnInit {

  @Output() nombreDeProducto: EventEmitter<string> = new EventEmitter();

  constructor(private service:ServicioService) { }

  ngOnInit(): void {
  }

  abrirConsulta(id:string | number){

    let producto = this.service.cargarInfo(id);


    this.nombreDeProducto.emit(producto.nombre)
    
    this.service.abrirProducto$.emit(true);

  }

}
