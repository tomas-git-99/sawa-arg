import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { ComponentesModule } from '../componentes.module';
import { UnoComponent } from './uno/uno.component';
import { DosComponent } from './dos/dos.component';
import { TresComponent } from './tres/tres.component';





@NgModule({
  declarations: [
    InicioComponent,
    UnoComponent,
    DosComponent,
    TresComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule
  ],
  exports: [
    InicioComponent
  ],
})

export class InicioModule { }
