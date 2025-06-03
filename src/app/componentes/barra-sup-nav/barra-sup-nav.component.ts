import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faInstagram, faFacebook, faWhatsapp, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun, faUserSecret, faRightToBracket, faBars } from '@fortawesome/free-solid-svg-icons';
import { IUsuario } from 'src/app/modelos/IUsuario';
import { UsuarioService } from 'src/app/servicios/api/usuario.service';
import { LoginService } from 'src/app/servicios/login/login.service';
import { TemaService } from 'src/app/servicios/multitemas/tema.service';

@Component({
  selector: 'app-barra-sup-nav',
  templateUrl: './barra-sup-nav.component.html',
  styleUrls: ['./barra-sup-nav.component.less']
})
export class BarraSupNavComponent {
  insta = faInstagram;
  face = faFacebook;
  what = faWhatsapp;
  git = faGithub;
  link = faLinkedin;
  dark = faMoon;
  light = faSun;
  user = faUserSecret;
  menu = faBars;
  login = faRightToBracket;

  temaActual: string;
  usuario :IUsuario | undefined;

  constructor(private temaServicio: TemaService,
    private usuarioService :UsuarioService,
    private loginService :LoginService) {
    this.temaActual = this.temaServicio.getTema();
    this.temaServicio.setTema(this.temaServicio.getTema());
  }

  cambiarTema() {
    if (this.temaActual === "default") {
      this.temaActual = "dark";
      this.temaServicio.setTema("dark");
    } else {
      this.temaServicio.setTema("default");
      this.temaActual = "default";
    }
  }

  obtenerUsuario() {
    this.usuarioService.obtenerUsuario().subscribe({
      next: (response :IUsuario) => {
        this.usuario = response;
      },
      error: (error :HttpErrorResponse) => {
        console.error(error.message);
      }
    })
  }

  estaLogeado():boolean {
    return this.loginService.estaLogeado();
  }

  logear(formLogin :NgForm){
    this.loginService.login(formLogin.value)
    .then(response => {console.log("Has iniciado sesión")})
    .catch(error => console.log("No se pudo iniciar sesión"))
    .finally(() => formLogin.reset())
  }

  cerrarSesion() {
    this.loginService.logout()
    .then(() => {console.log('Se cerro la sesión')})
    .catch(error => (console.log("No se pudo cerrar sesión")))
  }
}
