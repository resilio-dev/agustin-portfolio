import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProject } from 'src/app/core/models/IProject.model';

@Component({
  selector: 'app-form-editar-project',
  imports: [FormsModule],
  templateUrl: './form-editar-project.component.html',
  styleUrl: './form-editar-project.component.less',
})
export class FormEditarProjectComponent {
  @Input() proyecto?: IProject;
  @Output() editar = new EventEmitter<IProject>();

  editarProyecto(form: any) {
    this.editar.emit(form as IProject);
  }
}
