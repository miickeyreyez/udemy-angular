
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'usuario', 
    component: UsuarioComponent ,
    children:[
      { path: 'nuevo', component: UsuarioNuevoComponent },
      { path: 'editar', component: UsuarioEditarComponent },
      { path: 'detalles', component: UsuarioDetalleComponent },
      { path: '**', pathMatch: 'full', redirectTo:'nuevo' }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo:'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);