

import { ModuleWithProviders } from "@angular/core";
import { Routes , RouterModule} from "@angular/router";

import { AboutComponent } from './component/about/about.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { CreateComponent } from './component/create/create.component';
import { ContactComponent } from './component/contact/contact.component';
import { ErrorComponent } from "./component/error/error.component";
import { DetailComponent } from "./component/detail/detail.component";
import { EditComponent } from "./component/edit/edit.component";


const appRoutes: Routes = [
  {path: '',  component: AboutComponent},
  {path: 'sobre-mi', component: AboutComponent},
  {path: 'proyectos', component: ProjectsComponent},
  {path: 'crear-proyecto', component: CreateComponent},
  {path: 'contacto', component: ContactComponent},
  {path: 'proyecto/:id', component: DetailComponent},
  {path: 'editar-proyecto/:id', component: EditComponent},
  {path: '**', component: ErrorComponent},

]

export const appRoutingProviders: any[] = [] ;
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);



