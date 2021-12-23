import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { ComponentesModule } from '../componentes.module';
import { UnoComponent } from './uno/uno.component';



@NgModule({
  declarations: [
    InicioComponent,
    UnoComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule
  ],
  exports: [
    InicioComponent
  ]
})
export class InicioModule { }
