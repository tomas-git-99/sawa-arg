import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactosComponent } from './componentes/contactos/contactos.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ProductosComponent } from './componentes/productos/productos.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  { 
    path: 'productos',
    component: ProductosComponent,
    
   
  },
  {
    path: 'contacto',
    component: ContactosComponent
  }
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
