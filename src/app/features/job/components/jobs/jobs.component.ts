import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { IJob } from 'src/app/core/models/IJob.model';
import { TrabajoService } from 'src/app/core/services/job-service/trabajo.service';
import { HttpErrorResponse } from '@angular/common/module.d-CnjH8Dlt';
import { JobFormComponent } from '../job-form/job-form.component';

@Component({
  selector: 'app-jobs',
  imports: [
    CommonModule,
    ModalComponent,
    JobFormComponent
  ],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.less',
})
export class JobsComponent implements OnInit {
  trabajos: IJob[] = [];
  trabajoSeleccionado!: IJob;

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
