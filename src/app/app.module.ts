import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraSupNavComponent } from './componentes/barra-sup-nav/barra-sup-nav.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { BarraLatNavComponent } from './componentes/barra-lat-nav/barra-lat-nav.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FormacionComponent } from './componentes/formacion/formacion.component';
import { TrabajosComponent } from './componentes/trabajos/trabajos.component';
import { PaginaErrorComponent } from './componentes/pagina-error/pagina-error.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HabilidadComponent } from './componentes/habilidad/habilidad.component';
import { ModalComponent } from './componentes/modals/modal/modal.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { BrandComponent } from './shared/brand/brand.component';
import { NavbarComponent } from './features/navbar/navbar.component';
import { NavIconComponent } from './features/navbar/components/nav-icon/nav-icon.component';
import { LoginComponent } from './features/login/login.component';
import { DesktopLayoutComponent } from './layouts/home-desktop-layout/home-desktop-layout.component';
import { DesktopHomeComponent } from './features/home/desktop/desktop-home.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraSupNavComponent,
    SobreMiComponent,
    BarraLatNavComponent,
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
    DesktopHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
