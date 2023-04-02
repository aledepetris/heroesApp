import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoComponent } from './pages/listado/listado.component';
import { HomeComponent } from './pages/home/home.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';



@NgModule({
  declarations: [
    ListadoComponent,
    HomeComponent,
    BuscarComponent,
    AgregarComponent,
    HeroeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
