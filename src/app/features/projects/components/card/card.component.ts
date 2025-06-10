import { Component, Input, OnInit } from '@angular/core';
import { IProject } from '../../models/IProject.interface';
import { TemaService } from 'src/app/shared/services/multitemas/tema.service';
import { ITema } from 'src/app/shared/services/multitemas/itema.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
})
export class CardComponent implements OnInit {
  @Input() project?: IProject;
  temaActual!: ITema;
  constructor(private temaService: TemaService) {}

  ngOnInit(): void {
    this.temaService.temaActual$.subscribe((theme) => this.temaActual = theme)
  }
}
