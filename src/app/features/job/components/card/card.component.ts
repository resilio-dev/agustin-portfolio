import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProject } from 'src/app/core/models/IProject.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
})
export class CardComponent {
  @Input() project?: IProject;
}
