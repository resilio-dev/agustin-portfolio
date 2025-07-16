import { Component, Input } from '@angular/core';
import { ITema } from 'src/app/shared/services/multitemas/itema.interface';

@Component({
  selector: 'app-foto-user',
  imports: [],
  templateUrl: './foto-user.component.html',
  styleUrl: './foto-user.component.less'
})
export class FotoUserComponent {
  @Input() tema!: ITema;
}
