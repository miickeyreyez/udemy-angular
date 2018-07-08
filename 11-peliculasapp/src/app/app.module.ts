import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PeliculaComponent } from './componentes/pelicula/pelicula.component';
import { APP_ROUTING } from './app.routes';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { PeliculaimagePipe } from './pipes/peliculaimage.pipe';
import { SliderComponent } from './componentes/home/slider/slider.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PeliculaComponent,
    BuscarComponent,
    PeliculaimagePipe,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
