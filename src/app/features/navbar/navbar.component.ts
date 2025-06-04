import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faMoon,
  faRightToBracket,
  faSun,
  faUserSecret,
} from '@fortawesome/free-solid-svg-icons';
import { IUsuario } from 'src/app/modelos/IUsuario';
import { UsuarioService } from 'src/app/servicios/api/usuario.service';
import { LoginService } from 'src/app/servicios/login/login.service';
import { TemaService } from 'src/app/servicios/multitemas/tema.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
})
export class NavbarComponent {
  items = [
    { link: 'https://www.instagram.com/acov912/', icon: faInstagram },
    { link: 'https://www.facebook.com/agustiin007/', icon: faFacebook },
    { link: 'https://walink.co/47dd51', icon: faWhatsapp },
    { link: 'https://github.com/LicDeveloperJunior/', icon: faGithub },
    {
      link: 'https://www.linkedin.com/in/agustin-collueque/',
      icon: faLinkedin,
    },
  ];
  dark = faMoon;
  light = faSun;
  user = faUserSecret;
  menu = faBars;
  loginIcon = faRightToBracket;

  temaActual: string;
  usuario: IUsuario | undefined;

  constructor(
    private temaServicio: TemaService,
    private usuarioService: UsuarioService,
    private loginService: LoginService
  ) {
    this.temaActual = this.temaServicio.getTema();
    this.temaServicio.setTema(this.temaActual);
  }

  cambiarTema() {
    if (this.temaActual === 'default') {
      this.temaActual = 'dark';
    } else {
      this.temaActual = 'default';
    }
    this.temaServicio.setTema(this.temaActual);
  }

  obtenerUsuario() {
    this.usuarioService.obtenerUsuario().subscribe({
      next: (response: IUsuario) => {
        this.usuario = response;
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.message);
      },
    });
    if (!this.usuario) {
      this.usuario = {
        id: 1,
        nombre: 'Agustin',
        apellido: 'Colluque',
        edad: 27,
        descripcion:
          'I like to craft solid and scalable frontend products with great user experiences.',
        email: 'agustincv1997@gmail.com',
        foto: '#',
      } as IUsuario;
    }
  }

  estaLogeado(): boolean {
    return this.loginService.estaLogeado();
  }



  cerrarSesion() {
    this.loginService
      .logout()
      .then(() => {
        console.log('Se cerro la sesión');
      })
      .catch((error) => console.log('No se pudo cerrar sesión', error));
  }
}
