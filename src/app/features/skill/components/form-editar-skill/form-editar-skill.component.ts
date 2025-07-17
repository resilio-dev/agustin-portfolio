import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ISkill } from 'src/app/core/models/ISkill.model';

@Component({
  selector: 'app-form-editar-skill',
  imports: [CommonModule, FormsModule],
  templateUrl: './form-editar-skill.component.html',
  styleUrl: './form-editar-skill.component.less'
})
export class FormEditarSkillComponent {
  @Input() editHabilidad!: ISkill;
  @Output() editar = new EventEmitter<ISkill>();

  editarHabilidad(form: any) {
    this.editar.emit(form as ISkill);
  }
}
