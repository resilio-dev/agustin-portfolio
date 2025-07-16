import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IFormation } from 'src/app/core/models/IFormation.model';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-modal-agregar',
  imports: [ModalComponent, FormsModule],
  templateUrl: './modal-agregar.component.html',
  styleUrl: './modal-agregar.component.less'
})
export class ModalAgregarComponent {
  @Input() addFormacion?: IFormation;
  @Output() agregar = new EventEmitter<IFormation>();

  agregarFormacion(form: NgForm) {
    const formation :IFormation = form.form.value as IFormation;
    this.agregar.emit(formation);
    form.reset();
  }
}
