import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarBottomComponent } from 'src/app/features/navbar-bottom/navbar-bottom.component';
import { NavbarComponent } from 'src/app/features/navbar/navbar.component';
import { ITema } from 'src/app/shared/services/multitemas/itema.interface';
import { TemaService } from 'src/app/shared/services/multitemas/tema.service';

@Component({
  selector: 'app-desktop-layout',
  standalone: true,
  imports: [NavbarComponent, NavbarBottomComponent, RouterOutlet],
  templateUrl: './desktop-layout.component.html',
  styleUrls: ['./desktop-layout.component.less'],
})
export class DesktopLayoutComponent implements OnInit, OnDestroy{
  temaActual!: ITema;
  constructor(private temaService: TemaService) {}

  ngOnInit(): void {
    this.temaService.temaActual$.subscribe((theme) => this.temaActual = theme);
  }

  ngOnDestroy(): void {
    this.temaService.temaActual$.unsubscribe();
  }
  
  toggleTema() {
    this.temaService.toggleTema();
  }

}
