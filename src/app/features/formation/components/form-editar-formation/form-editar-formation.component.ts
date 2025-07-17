import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IFormation } from 'src/app/core/models/IFormation.model';

@Component({
  selector: 'app-form-editar-formation',
  imports: [FormsModule],
  templateUrl: './form-editar-formation.component.html',
  styleUrl: './form-editar-formation.component.less',
})
export class FormEditarFormationComponent {
  @Input() formacion?: IFormation;
  @Output() editar = new EventEmitter<IFormation>();

  editarForm(form: any) {
    this.editar.emit(form as IFormation);
  }
}
