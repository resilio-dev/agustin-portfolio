import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IFormation } from 'src/app/core/models/IFormation.model';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { FormAgregarFormationComponent } from "../form-agregar-formation/form-agregar-formation.component";
import { FormEditarFormationComponent } from "../form-editar-formation/form-editar-formation.component";

@Component({
  selector: 'app-formation',
  imports: [CommonModule, ModalComponent, FormAgregarFormationComponent, FormEditarFormationComponent],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.less',
})
export class FormationComponent {
  formaciones: IFormation[] = [];
  formacionSeleccionada?: IFormation;

  eliminarFormacion(id: number) {
    alert('formacion eliminada -> ' + id);
  }
  editarFormacion(form :IFormation) {
    alert('formacion editada '+form.id);
  }

  agregarFormacion(form: IFormation) {
    this.formacionSeleccionada = form;
  }

  seleccionarFormacion(form: IFormation) {
    this.formacionSeleccionada = form;
  }

  estaLogeado(): boolean {
    return false;
  }
}
