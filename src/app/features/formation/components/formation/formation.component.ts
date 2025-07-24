import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IFormation } from 'src/app/core/models/IFormation.model';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { HttpErrorResponse } from '@angular/common/module.d-CnjH8Dlt';
import { FormacionService } from 'src/app/core/services/formation-service/formacion.service';
import { FormationFormComponent } from '../formation-form/formation-form.component';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { ToastrService } from 'ngx-toastr';
import { AppDataService } from 'src/app/core/services/app-data-service/app-data.service';

@Component({
  selector: 'app-formation',
  imports: [
    CommonModule,
    ModalComponent,
    FormationFormComponent,
    CardComponent,
  ],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.less',
})
export class FormationComponent implements OnInit {
  formaciones: IFormation[] = [];
  formacionSeleccionada!: IFormation;

  constructor(
    private appDataService: AppDataService,
    private formService: FormacionService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.formaciones = this.appDataService.getFormations();
  }

  eliminarFormacion(id: number) {
    this.formService.eliminarFormacion(id).subscribe({
      next: () => {
        this.toastr.success(
          'Formation with ID '+id+' deleted.',
          'Submitted Form'
        );
      },
      error: (err: HttpErrorResponse) => {
        const error =
          err.error?.message ||
          'An error ocurred while the formation was deleting.';
        this.toastr.error(error);
      },
    })
  }
  editarFormacion(form: IFormation) {
    this.formService.actualizarFormacion(form).subscribe({
      next: () => {
        this.toastr.success(
          'Updated formation.',
          'Submitted Form'
        );
      },
      error: (err: HttpErrorResponse) => {
        const error =
          err.error?.message ||
          'An error ocurred while the formation was updating.';
        this.toastr.error(error);
      },
    })
  }

  agregarFormacion(form: IFormation) {
    this.formService.agregarFormacion(form).subscribe({
      next: () => {
        this.toastr.success(
          'Created new formation.',
          'Submitted Form'
        );
      },
      error: (err: HttpErrorResponse) => {
        const error =
          err.error?.message ||
          'An error ocurred while the formation was creating.';
        this.toastr.error(error);
      },
    });
  }
  
  obtenerFormaciones() {
    this.formService.obtenerFormaciones().subscribe({
      next: (forms: IFormation[]) => {
        this.formaciones = forms;
      },
      error: (er: HttpErrorResponse) => {
        const error = er.error.message || 'We cannot load academic formations at this time.';
        this.toastr.error(error);
      },
    });
  }

  seleccionarFormacion(form: IFormation) {
    this.formacionSeleccionada = form;
  }

  estaLogeado(): boolean {
    return localStorage.getItem('user') != null;
  }
}
