import { Component, OnInit } from '@angular/core';
import { NavBottomButtonComponent } from './components/nav-bottom-button/nav-bottom-button.component';
import { CommonModule } from '@angular/common';
import { NavigationService } from 'src/app/core/services/navigation-service/navigation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar-bottom',
  standalone: true,
  imports: [CommonModule, NavBottomButtonComponent],
  templateUrl: './navbar-bottom.component.html',
  styleUrls: ['./navbar-bottom.component.less'],
})
export class NavbarBottomComponent implements OnInit {
  pages = ['CONTACTO', 'TECNOLOGÍAS', 'INICIO', 'PORTAFOLIO', 'FORMACION'];
  routeMap: { [key: string]: string } = {
    'INICIO': '/inicio',
    'PORTAFOLIO': '/portafolio-web',
    'CONTACTO': '/contacto',
    'FORMACION': '/formacion',
    'TECNOLOGÍAS': '/tecnologias',
  };
  currentRoute$!: Observable<string>;

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.currentRoute$ = this.navigationService.currentRoute$;
  }

  navigateTo(page: string) {
    const path = this.routeMap[page];
    if (path) this.navigationService['router'].navigate([path]);
  }
}
