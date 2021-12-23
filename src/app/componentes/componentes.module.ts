import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [
    NavbarComponent,

  ],
  imports: [
    CommonModule,    
  ],
  exports: [
    NavbarComponent,
]
})
export class ComponentesModule { }
