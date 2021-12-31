import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoComponent } from './productos/producto/producto.component';
import { ViewProductoComponent } from './view-producto/view-producto.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { ContactosComponent } from './contactos/contactos.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ProductosComponent,
    ProductoComponent,
    ViewProductoComponent,
    ContactosComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
]
})
export class ComponentesModule { }
