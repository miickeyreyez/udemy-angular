import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroesEditComponent } from './components/heroes/heroes-edit.component';
import { HeroeComponent } from './components/heroes/heroe.component';


export const routes: Routes = [
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'edit/:id', component: HeroesEditComponent },
    { path: '**', component: HeroesComponent },
];

export const APP_ROUTING  = RouterModule.forRoot(routes)