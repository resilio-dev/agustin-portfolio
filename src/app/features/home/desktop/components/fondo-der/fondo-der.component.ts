import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fondo-der',
  imports: [],
  templateUrl: './fondo-der.component.html',
  styleUrl: './fondo-der.component.less'
})
export class FondoDerComponent {
  @Input() color: string = 'white';
}
