import { Component, Input, OnInit } from '@angular/core';
import { IProject } from '../../../../core/models/IProject.model';
import { TemaService } from 'src/app/shared/services/multitemas/tema.service';
import { ITema } from 'src/app/shared/services/multitemas/itema.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ],
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
