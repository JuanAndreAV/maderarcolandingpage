import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClasesComponent } from './pages/clases/clases.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { TiendaComponent } from './pages/tienda/tienda.component';

export const routes: Routes = [{
    path: '',
    component: HomeComponent,
},
{
    path: 'clases',
    component: ClasesComponent,
},
{
    path: 'eventos',
    component: EventosComponent,
},
{
    path: 'tienda',
    component: TiendaComponent
}

];
