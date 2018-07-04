import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroesEditComponent } from './components/heroes/heroes-edit.component';
import { APP_ROUTING } from './app.routes';
import { HeroeComponent } from './components/heroes/heroe.component';
import { FormsModule } from '@angular/forms';
import { HeroeService } from './services/heroe.service';
import { KeyPipe } from './pipes/key.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesEditComponent,
    HeroeComponent,
    KeyPipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule,
    FormsModule
  ],
  providers: [HeroeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
