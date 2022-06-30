import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExemploComponenteModuloComponent } from './../exemplo-componente-modulo/exemplo-componente-modulo.component'


@NgModule({
  declarations: [
    ExemploComponenteModuloComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExemploComponenteModuloComponent
  ]
})
export class ExemplomoduloModule { }
