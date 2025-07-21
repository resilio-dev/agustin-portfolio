import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bottom-button',
  imports: [],
  templateUrl: './nav-bottom-button.component.html',
  styleUrl: './nav-bottom-button.component.less'
})
export class NavBottomButtonComponent {
  @Input() page!: string;
  @Input() active: boolean = false;
}
