import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.less'
})
export class CardComponent {
@Input() title: string = '';
  @Input() subtitle?: string;
  @Input() description?: string;
  @Input() imageUrl?: string;
  @Input() tags?: string[];
  @Input() footer?: string;
}
