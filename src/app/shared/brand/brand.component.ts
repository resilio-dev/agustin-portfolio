import { Component, OnDestroy, OnInit } from '@angular/core';
import { TemaService } from 'src/app/servicios/multitemas/tema.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.less']
})
export class BrandComponent implements OnInit, OnDestroy {
  temaActual!: string;
  constructor(private temaService: TemaService) {
   }

  ngOnInit(): void {
    this.temaService.temaActual$.subscribe((theme) => this.temaActual = theme.name)
  }

  ngOnDestroy(): void {
    this.temaService.temaActual$.unsubscribe();
  }

}
