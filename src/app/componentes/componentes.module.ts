import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoComponent } from './productos/producto/producto.component';
import { ViewProductoComponent } from './view-producto/view-producto.component';


@NgModule({
  declarations: [
    NavbarComponent,
    ProductosComponent,
    ProductoComponent,
    ViewProductoComponent,

  ],
  imports: [
    CommonModule,    
  ],
  exports: [
    NavbarComponent,
]
})
export class ComponentesModule { }
