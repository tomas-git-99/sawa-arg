import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  datosProducto$ = new EventEmitter<any>();

  constructor() { }
}
