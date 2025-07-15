import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITema } from 'src/app/shared/services/multitemas/itema.interface';
import { TemaService } from 'src/app/shared/services/multitemas/tema.service';

@Component({
  selector: 'app-navbar-bottom',
  standalone: true,
  imports: [],
  templateUrl: './navbar-bottom.component.html',
  styleUrls: ['./navbar-bottom.component.less']
})
export class NavbarBottomComponent implements OnInit {
  tema!: ITema;
  active: 'left' | 'center' | 'right' = 'center';

  constructor(private router: Router, private temaService: TemaService) { }

  ngOnInit(): void {
    this.temaService.temaActual$.subscribe(t => this.tema = t)
  }

  navigateTo(page: string) {
    switch (page) {
      case 'home':
        this.router.navigate(['/']);
        break;
      case 'projects':
        this.router.navigate(['/']);
        break;
      case 'contact':
        this.router.navigate(['/']);
        break;
    }
  }

}
