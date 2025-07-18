import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IFormation } from 'src/app/core/models/IFormation.model';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { FormAgregarFormationComponent } from '../form-agregar-formation/form-agregar-formation.component';
import { FormEditarFormationComponent } from '../form-editar-formation/form-editar-formation.component';
import { IUser } from 'src/app/core/models/IUser.model';

@Component({
  selector: 'app-formation',
  imports: [
    CommonModule,
    ModalComponent,
    FormAgregarFormationComponent,
    FormEditarFormationComponent,
  ],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.less',
})
export class FormationComponent implements OnInit {
  formaciones: IFormation[] = [];
  formacionSeleccionada?: IFormation;

  ngOnInit(): void {
    const aux = localStorage.getItem('user');
    if (aux != null) {
      const usuario: IUser = JSON.parse(aux) as IUser;
      this.formaciones = usuario.formations;
    }
  }

  eliminarFormacion(id: number) {
    alert('formacion eliminada -> ' + id);
  }
  editarFormacion(form: IFormation) {
    alert('formacion editada ' + form.id);
  }

  agregarFormacion(form: IFormation) {
    alert('formacion creada ' + form.title);
  }

  seleccionarFormacion(form: IFormation) {
    this.formacionSeleccionada = form;
  }

  estaLogeado(): boolean {
    return localStorage.getItem('user') != null;
  }
}
