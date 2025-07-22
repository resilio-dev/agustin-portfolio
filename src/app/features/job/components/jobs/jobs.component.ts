import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { IJob } from 'src/app/core/models/IJob.model';
import { TrabajoService } from 'src/app/core/services/job-service/trabajo.service';
import { HttpErrorResponse } from '@angular/common/module.d-CnjH8Dlt';
import { JobFormComponent } from '../job-form/job-form.component';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { ISkill } from 'src/app/core/models/ISkill.model';
import { ModalActionsButtonComponent } from 'src/app/shared/components/modal-actions-button/modal-actions-button.component';

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

  constructor(private trabService: TrabajoService) {}

  ngOnInit(): void {
    this.trabService.obtenerTrabajos().subscribe({
      next: (trabs: IJob[]) => {
        this.trabajos = trabs;
      },
      error: (er: HttpErrorResponse) => console.error(er.message),
    });
  }

  getTecnologies(tecno: ISkill[]): string[] {
    const tecnoArray = [];
    for (let tec of tecno) {
      tecnoArray.push(tec.name)
    }
    return tecnoArray;
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
