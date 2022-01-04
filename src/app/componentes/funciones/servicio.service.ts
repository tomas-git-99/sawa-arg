import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Observable, of, Subject } from "rxjs";
import { delay } from "rxjs/operators";

import Productos from '../../../assets/productos.json';
@Injectable({

  providedIn: 'root'
})
export class ServicioService {


  salirProducto$ = new EventEmitter<boolean>();
  abrirProducto$ = new EventEmitter<boolean>();


  datosProducto$ = new EventEmitter<any>();
  dataProducto$ = new EventEmitter<any>();



  constructor() {
    
   }
 

  loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }



  cargarInfo(id:number | string) {

    const productos:any = Productos;
    let producto = productos.Productos.find( (e:any) => e.id == id);

  
    return producto
  }
}
