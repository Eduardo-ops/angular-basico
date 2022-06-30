import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CursoAngularComponent } from './curso-angular/curso-angular.component';
import { ExemploComponenteModuloComponent } from './exemplo-componente-modulo/exemplo-componente-modulo.component'

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CursoAngularComponent,
    ExemploComponenteModuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
