import { DesktopLayoutComponent } from './layouts/desktop/desktop-layout.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: DesktopLayoutComponent,
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      {
        path: 'inicio',
        loadComponent: () =>
          import('./features/home/desktop/pages/desktop-home.component').then(
            (m) => m.DesktopHomeComponent
          ),
      },
      {
        path: 'tecnologias',
        loadComponent: () =>
          import('./features/skill/habilidad.component').then(
            (m) => m.HabilidadComponent
          ),
      },
      {
        path: 'formacion',
        loadComponent: () =>
          import('./features/formation/formacion.component').then(
            (m) => m.FormacionComponent
          ),
      },
      {
        path: 'portafolio-web',
        loadComponent: () =>
          import('./features/job/trabajos.component').then(
            (m) => m.TrabajosComponent
          ),
      },
      {
        path: 'contacto',
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
  {
    path: '**',
    loadComponent: () =>
      import('./shared/components/pagina-error/pagina-error.component').then(
        (m) => m.PaginaErrorComponent
      ),
  },
];
