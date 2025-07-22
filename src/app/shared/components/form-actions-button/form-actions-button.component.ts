import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-actions-button',
  imports: [],
  templateUrl: './form-actions-button.component.html',
  styleUrl: './form-actions-button.component.less'
})
export class FormActionsButtonComponent {
  @Input() disabled:boolean = true;

  @Output() cancel = new EventEmitter<void>();
  @Output() save = new EventEmitter<void>();
}
