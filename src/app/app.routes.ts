import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LocalitationComponent } from './componentes/localitation/localitation.component';
import { HomeComponent } from './componentes/home/home.component';


const APP_ROUTE: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'location', component: LocalitationComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
 ];

 export const APP_ROUTING = RouterModule.forRoot(APP_ROUTE);
