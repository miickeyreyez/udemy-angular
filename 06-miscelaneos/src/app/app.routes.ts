
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [
  { path: 'path', component: HomeComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);