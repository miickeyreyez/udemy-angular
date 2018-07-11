import { Routes, RouterModule } from '@angular/router';
import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';

const routes: Routes = [
    { path: '', component: FotosComponent },
    { path: 'fotos', component: FotosComponent },
    { path: 'carga', component: CargaComponent },
    { path: '**', pathMatch:'full', redirectTo:'fotos' }
]

export const APP_ROUTING = RouterModule.forRoot(routes);
