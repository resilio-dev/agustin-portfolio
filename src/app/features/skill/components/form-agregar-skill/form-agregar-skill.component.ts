import { Component, EventEmitter, Output } from '@angular/core';
import { ISkill } from 'src/app/core/models/ISkill.model';

@Component({
  selector: 'app-form-agregar-skill',
  imports: [],
  templateUrl: './form-agregar-skill.component.html',
  styleUrl: './form-agregar-skill.component.less',
})
export class FormAgregarSkillComponent {
  @Output() agregar = new EventEmitter<ISkill>();

  agregarHabilidad(form: any) {
    this.agregar.emit(form as ISkill);
  }
}
