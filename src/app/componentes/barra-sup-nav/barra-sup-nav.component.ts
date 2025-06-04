import { Component } from '@angular/core';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-barra-sup-nav',
  templateUrl: './barra-sup-nav.component.html',
  styleUrls: ['./barra-sup-nav.component.less'],
})
export class BarraSupNavComponent {
  menu = faBars;
  close = faClose;
  activeMenu:boolean = false;

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }
}
