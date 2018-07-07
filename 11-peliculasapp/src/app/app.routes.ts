import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './componentes/home/home.component';
import { PeliculaComponent } from './componentes/pelicula/pelicula.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'peliculas', component: PeliculaComponent },
    { path: 'buscar', component: BuscarComponent },
    { path: '**', component: HomeComponent },

];

export const APP_ROUTING = RouterModule.forRoot(routes)
