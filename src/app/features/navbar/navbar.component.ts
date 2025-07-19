import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IUser } from 'src/app/core/models/IUser.model';
import { TemaService } from 'src/app/shared/services/multitemas/tema.service';
import { NavIconComponent } from "./components/nav-icon/nav-icon.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NavIconComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
})
export class NavbarComponent {
  showMenu = false;
  items = [
    { link: 'https://www.instagram.com/acov912/', iconClass: "fab fa-instagram" },
    { link: 'https://www.facebook.com/agustiin007/', iconClass: "fab fa-facebook" },
    { link: 'https://walink.co/47dd51', iconClass: "fab fa-whatsapp" },
    { link: 'https://github.com/LicDeveloperJunior/', iconClass: "fab fa-github" },
    {
      link: 'https://www.linkedin.com/in/agustin-collueque/',
      iconClass: "fab fa-linkedin",
    },
  ];

  usuario?: IUser;

  constructor(private temaServicio: TemaService) {
  }

  getTema(): string {
    return this.temaServicio.getTemaActual();
  }

  toggleTema() {
    this.temaServicio.toggleTema();
  }

  showHideMenu() {
    this.showMenu = !this.showMenu;
  }
}
