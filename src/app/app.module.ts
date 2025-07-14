import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreMiComponent } from './features/about-me/sobre-mi.component';
import { ContactoComponent } from './shared/components/form-contact/contacto.component';
import { FormacionComponent } from './features/formation/formacion.component';
import { TrabajosComponent } from './features/job/trabajos.component';
import { PaginaErrorComponent } from './shared/components/pagina-error/pagina-error.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HabilidadComponent } from './features/skill/habilidad.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { BrandComponent } from './shared/components/brand/brand.component';
import { NavbarComponent } from './features/navbar/navbar.component';
import { NavIconComponent } from './features/navbar/components/nav-icon/nav-icon.component';
import { LoginComponent } from './features/login/login.component';
import { DesktopLayoutComponent } from './layouts/desktop/desktop-layout.component';
import { DesktopHomeComponent } from './features/home/desktop/desktop-home.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { CardComponent } from './features/projects/components/card/card.component';
import { NavbarBottomComponent } from './features/navbar-bottom/navbar-bottom.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    SobreMiComponent,
    ContactoComponent,
    FormacionComponent,
    TrabajosComponent,
    PaginaErrorComponent,
    HabilidadComponent,
    ModalComponent,
    BrandComponent,
    NavbarComponent,
    NavIconComponent,
    LoginComponent,
    DesktopLayoutComponent,
    DesktopHomeComponent,
    ProjectsComponent,
    CardComponent,
    NavbarBottomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
