import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
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
import { IUsuario } from 'modelos/IUsuario';
import { ITema } from 'src/app/servicios/multitemas/itema-interface';
import { TemaService } from 'src/app/servicios/multitemas/tema.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  showMenu = false;
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

  temaActual?: ITema;
  usuario?: IUsuario;

  constructor(private temaServicio: TemaService) {
  }

  ngOnInit(): void {
    this.temaServicio.temaActual$.subscribe(
      (theme) => (this.temaActual = theme)
    );
  }

  ngOnDestroy(): void {
    this.temaServicio.temaActual$.unsubscribe();
  }

  toggleTema() {
    this.temaServicio.toggleTema();
  }

  showHideMenu() {
    this.showMenu = !this.showMenu;
  }
}
