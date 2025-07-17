import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFormation } from 'src/app/core/models/IFormation.model';

@Component({
  selector: 'app-form-agregar-formation',
  imports: [],
  templateUrl: './form-agregar-formation.component.html',
  styleUrl: './form-agregar-formation.component.less',
})
export class FormAgregarFormationComponent {
  @Output() agregar = new EventEmitter<IFormation>();

  agregarNuevo(form: any) {
    this.agregar.emit(form as IFormation);
  }
}
