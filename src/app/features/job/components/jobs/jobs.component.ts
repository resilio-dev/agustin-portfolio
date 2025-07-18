import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormAgregarJobComponent } from '../form-agregar-job/form-agregar-job.component';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { IJob } from 'src/app/core/models/IJob.model';
import { FormEditarJobComponent } from '../form-editar-job/form-editar-job.component';
import { TrabajoService } from 'src/app/core/services/job-service/trabajo.service';
import { HttpErrorResponse } from '@angular/common/module.d-CnjH8Dlt';

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
export class JobsComponent implements OnInit {
  trabajos: IJob[] = [];
  trabajoSeleccionado?: IJob;

  constructor(private trabService: TrabajoService) {}

  ngOnInit(): void {
    this.trabService.obtenerTrabajos().subscribe({
      next: (trabs: IJob[]) => {
        this.trabajos = trabs;
      },
      error: (er: HttpErrorResponse) => console.error(er.message),
    });
  }

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
    return localStorage.getItem('user') != null;
  }

  seleccionarTrabajo(job: IJob) {
    this.trabajoSeleccionado = job;
  }
}
