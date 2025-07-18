import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IFormation } from 'src/app/core/models/IFormation.model';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { FormAgregarFormationComponent } from '../form-agregar-formation/form-agregar-formation.component';
import { FormEditarFormationComponent } from '../form-editar-formation/form-editar-formation.component';
import { HttpErrorResponse } from '@angular/common/module.d-CnjH8Dlt';
import { FormacionService } from 'src/app/core/services/formation-service/formacion.service';

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

constructor(private formService: FormacionService) {}

  ngOnInit(): void {
    this.obtenerFormaciones();
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

  obtenerFormaciones() {
    this.formService.obtenerFormaciones().subscribe({
      next: (forms: IFormation[]) => {
        this.formaciones = forms;
      },
      error: (er: HttpErrorResponse) => console.error(er.message)
    })
  }
}
