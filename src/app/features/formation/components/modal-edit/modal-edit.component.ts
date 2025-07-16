import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IFormation } from 'src/app/core/models/IFormation.model';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-modal-edit',
  imports: [CommonModule, ModalComponent, FormsModule],
  templateUrl: './modal-edit.component.html',
  styleUrl: './modal-edit.component.less'
})
export class ModalEditComponent {
  @Input() editFormacion? :IFormation;
  @Output() editar = new EventEmitter<IFormation>();

  editarFormacion(editForm: NgForm) {
    const formation :IFormation = editForm.form.value as IFormation;
    this.editar.emit(formation);
    editForm.reset();
  }
}
