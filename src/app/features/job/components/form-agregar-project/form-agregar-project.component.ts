import { Component, EventEmitter, Output } from '@angular/core';
import { IProject } from 'src/app/core/models/IProject.model';

@Component({
  selector: 'app-form-agregar-project',
  imports: [],
  templateUrl: './form-agregar-project.component.html',
  styleUrl: './form-agregar-project.component.less',
})
export class FormAgregarProjectComponent {
  @Output() agregar = new EventEmitter<IProject>();

  agregarProyecto(form: any) {
    this.agregar.emit(form as IProject);
  }
}
