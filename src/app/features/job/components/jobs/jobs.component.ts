import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormAgregarJobComponent } from '../form-agregar-job/form-agregar-job.component';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { IJob } from 'src/app/core/models/IJob.model';
import { FormEditarJobComponent } from '../form-editar-job/form-editar-job.component';

@Component({
  selector: 'app-jobs',
  imports: [
    CommonModule,
    ModalComponent,
    FormAgregarJobComponent,
    FormEditarJobComponent,
  ],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.less',
})
export class JobsComponent {
  trabajos: IJob[] = [];

  agregarTrabajo(job: IJob) {
    alert('trabajo creado');
  }

  editarTrabajo(job: IJob) {
    alert('trabajo actualizado ' + job.id);
  }

  eliminarTrabajo(id: number) {
    alert('trabajo eliminado');
  }

  estaLogeado() {
    return false;
  }
}
