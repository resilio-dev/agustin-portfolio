import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-actions-button',
  imports: [],
  templateUrl: './modal-actions-button.component.html',
  styleUrl: './modal-actions-button.component.less'
})
export class ModalActionsButtonComponent {
  @Output() edit = new EventEmitter<void>();
  @Output() remove = new EventEmitter<void>();
}

