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
          import('./features/home/desktop/pages/desktop-home.component').then(
            (m) => m.DesktopHomeComponent
          ),
      },
      {
        path: 'skills',
        loadComponent: () =>
          import('./features/skill/habilidad.component').then(
            (m) => m.HabilidadComponent
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
          import('./features/contact/contacto.component').then(
            (m) => m.ContactoComponent
          ),
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/login.component').then((m) => m.LoginComponent),
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
