import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { IJob } from 'src/app/core/models/IJob.model';
import { TrabajoService } from 'src/app/core/services/job-service/trabajo.service';
import { HttpErrorResponse } from '@angular/common/module.d-CnjH8Dlt';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { ISkill } from 'src/app/core/models/ISkill.model';
import { ModalActionsButtonComponent } from 'src/app/shared/components/modal-actions-button/modal-actions-button.component';
import { ToastrService } from 'ngx-toastr';
import { JobFormComponent } from '../job-form/job-form.component';

@Component({
  selector: 'app-jobs',
  imports: [
    CommonModule,
    ModalComponent,
    JobFormComponent,
    ModalActionsButtonComponent,
    CardComponent
],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.less',
})
export class JobsComponent implements OnInit {
  trabajos: IJob[] = [];
  trabajoSeleccionado!: IJob;

  constructor(private trabService: TrabajoService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.obtenerTrabajos();
  }

  getTecnologies(tecno: ISkill[]): string[] {
    const tecnoArray = [];
    for (let tec of tecno) {
      tecnoArray.push(tec.name)
    }
    return tecnoArray;
  }

  estaLogeado() {
    return localStorage.getItem('user') != null;
  }

  seleccionarTrabajo(job: IJob) {
    this.trabajoSeleccionado = job;
  }

  eliminarTrabajo(id: number) {
      this.trabService.eliminarTrabajo(id).subscribe({
        next: () => {
          this.toastr.success(
            'Job with ID '+id+' deleted.',
            'Submitted job'
          );
        },
        error: (err: HttpErrorResponse) => {
          const error =
            err.error?.message ||
            'An error ocurred while the Job was deleting.';
          this.toastr.error(error);
        },
      })
    }
    editarTrabajo(job: IJob) {
      this.trabService.actualizarTrabajo(job).subscribe({
        next: () => {
          this.toastr.success(
            'Updated Job.',
            'Submitted Job'
          );
        },
        error: (err: HttpErrorResponse) => {
          const error =
            err.error?.message ||
            'An error ocurred while the Job was updating.';
          this.toastr.error(error);
        },
      })
    }
  
    agregarTrabajo(job: IJob) {
      this.trabService.agregarTrabajo(job).subscribe({
        next: () => {
          this.toastr.success(
            'Created new Job.',
            'Submitted Job'
          );
        },
        error: (err: HttpErrorResponse) => {
          const error =
            err.error?.message ||
            'An error ocurred while the Job was creating.';
          this.toastr.error(error);
        },
      });
    }
    
    obtenerTrabajos() {
      this.trabService.obtenerTrabajos().subscribe({
        next: (jobs: IJob[]) => {
          this.trabajos = jobs;
        },
        error: (er: HttpErrorResponse) => {
          const error = er.error.message || 'We cannot load academic Jobs at this time.';
          this.toastr.error(error);
        },
      });
    }
}
