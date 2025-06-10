import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaErrorComponent } from './componentes/pagina-error/pagina-error.component';
import { DesktopLayoutComponent } from './layouts/home-desktop-layout/home-desktop-layout.component';

const routes: Routes = [
  {
    path: 'desktop',
    component: DesktopLayoutComponent,
  },
  { path: '', redirectTo: '/desktop', pathMatch: 'full' },
  { path: '**', component: PaginaErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
