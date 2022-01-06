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
import { FinalComponent } from './final/final.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicioService } from './funciones/servicio.service';
import { ConsultarComponent } from './consultar/consultar.component';


@NgModule({
  declarations: [
    NavbarComponent,
    ProductosComponent,
    ProductoComponent,
    ViewProductoComponent,
    ContactosComponent,
    FinalComponent,
    ConsultarComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  ],
  exports: [
    NavbarComponent,
    FinalComponent,
    ConsultarComponent
],
providers: [ServicioService]
})
export class ComponentesModule { }
