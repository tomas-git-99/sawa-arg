import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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

  data_full:any;

  datos_productos:any;

  constructor(public translate: TranslateService, private service:ServicioService) { 
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');


    const browserLang:any = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang : 'es');
  }


  ngOnInit(): void {


    this.service.datosProducto$.subscribe(e => {

     this.nombre = e
    })

    this.service.dataProducto$.subscribe(e => {
    
      this.data_full = e;
    })
    
    this.service.salirProducto$.subscribe( e => {

      this.estado = e;

    })

    this.service.abrirProducto$.subscribe( e => {
      this.estadoConsulta = e;
    })

 
    
  }




  
  
}
