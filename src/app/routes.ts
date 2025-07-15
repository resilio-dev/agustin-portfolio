import { PaginaErrorComponent } from './shared/components/pagina-error/pagina-error.component';
import { DesktopLayoutComponent } from './layouts/desktop/desktop-layout.component';
import { DesktopHomeComponent } from './features/home/desktop/desktop-home.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { HabilidadComponent } from './features/skill/habilidad.component';
import { TrabajosComponent } from './features/job/trabajos.component';
import { ContactoComponent } from './shared/components/form-contact/contacto.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'desktop',
    component: DesktopLayoutComponent,
    children: [
      {
        path: '',
        component: DesktopHomeComponent,
      },
      {
        path: 'projects',
        component: ProjectsComponent,
      },
      {
        path: 'skills',
        component: HabilidadComponent,
      },
      {
        path: 'jobs',
        component: TrabajosComponent,
      },
      {
        path: 'contact',
        component: ContactoComponent,
      },
    ],
  },
  { path: '', redirectTo: '/desktop', pathMatch: 'full' },
  { path: '**', component: PaginaErrorComponent },
];
