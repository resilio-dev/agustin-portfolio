import { Component, OnDestroy, OnInit } from '@angular/core';
import { ITema } from 'src/app/servicios/multitemas/itema-interface';
import { TemaService } from 'src/app/servicios/multitemas/tema.service';

@Component({
  selector: 'app-desktop-layout',
  templateUrl: './home-desktop-layout.component.html',
  styleUrls: ['./home-desktop-layout.component.less'],
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
