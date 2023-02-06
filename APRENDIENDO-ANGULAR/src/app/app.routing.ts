import { AppRoutingModule } from './app-routing.module';
/// Importar los modulo de router de Angular

import { ModuleWithProviders } from "@angular/compiler/src/core";
import { Routes, RouterModule } from "@angular/router";


//  Importar componentes
import { HomeComponent } from "./home/home.component";
import { ZapatillasComponent  } from "./zapatillas/zapatillas.component";
import { VideoJuegoComponent } from "./video-juego/video-juego.component";
import { CursosComponent } from "./cursos/cursos.component";
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';


// Array de rutas
const appRoutes : Routes = [
    {path: '', component: HomeComponent},
    {path: 'zapatillas', component: ZapatillasComponent},
    {path: 'videojuegos', component: VideoJuegoComponent},
    {path: 'cursos/', component: CursosComponent},
    {path: 'cursos/:nombre', component: CursosComponent},
    {path: 'cursos/:nombre/:followers', component: CursosComponent},
    {path: 'externo', component: ExternoComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '**', component:HomeComponent}
]

// Exportar el modulo del router
export const AppRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);



