import { DesktopLayoutComponent } from './layouts/desktop/desktop-layout.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'desktop',
    component: DesktopLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/home/desktop/desktop-home.component').then(
            (m) => m.DesktopHomeComponent
          ),
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./features/projects/projects.component').then(
            (m) => m.ProjectsComponent
          ),
      },
      {
        path: 'formation',
        loadComponent: () =>
          import('./features/formation/formacion.component').then(
            (m) => m.FormacionComponent
          ),
      },
      {
        path: 'jobs',
        loadComponent: () =>
          import('./features/job/trabajos.component').then(
            (m) => m.TrabajosComponent
          ),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./shared/components/form-contact/contacto.component').then(
            (m) => m.ContactoComponent
          ),
      },
    ],
  },
  { path: '', redirectTo: '/desktop', pathMatch: 'full' },
  {
    path: '**',
    loadComponent: () =>
      import('./shared/components/pagina-error/pagina-error.component').then(
        (m) => m.PaginaErrorComponent
      ),
  },
];
