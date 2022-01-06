import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ServicioService } from '../funciones/servicio.service';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-view-producto',
  templateUrl: './view-producto.component.html',
  styleUrls: ['./view-producto.component.css']
})
export class ViewProductoComponent implements OnInit {

  @Input() item:any; 
  @Input() item_data:any; 

  constructor(public translate: TranslateService, private service: ServicioService, private srs:ServiciosService) {

  }
  
  ngOnInit(): void {
    console.log(this.item_data)
  
  }
  

  
  onSalir(){
    this.service.loadScript("https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js");
    this.service.salirProducto$.emit(false);

  }


}
