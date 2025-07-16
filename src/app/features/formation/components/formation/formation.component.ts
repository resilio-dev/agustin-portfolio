import { Component } from '@angular/core';
import { ModalAgregarComponent } from '../modal-agregar/modal-agregar.component';
import { CommonModule } from '@angular/common';
import { IFormation } from 'src/app/core/models/IFormation.model';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';

@Component({
  selector: 'app-formation',
  imports: [CommonModule, ModalAgregarComponent, ModalEditComponent],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.less',
})
export class FormationComponent {
  formaciones: IFormation[] = [];
  formSelected?: IFormation;

  showModalEdit: boolean = false;
  showModalRemove: boolean = false;
  showModalAdd: boolean = false;

  eliminarFormacion(form: IFormation) {
    this.formSelected = form;
  }
  eliminarFormacionSeleccionada() {
    alert('formacion eliminada');
  }

  editarFormacion(form: IFormation) {
    this.formSelected = form;
  }
  editarFormacionSeleccionada(form: IFormation) {
    alert('form editada '+form.title)
  }

  agregarFormacion(form: IFormation) {
    this.formSelected = form;
  }
  agregarFormacionSeleccionada(form: IFormation) {
    alert('form agregada '+form.title)
  }
}
