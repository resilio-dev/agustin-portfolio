import { Injectable } from '@angular/core';
import { IJob } from '../../models/IJob.model';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { TrabajoService } from '../job-service/trabajo.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/module.d-CnjH8Dlt';

@Injectable({
  providedIn: 'root',
})
export class JobDataService {
  jobsSubject = new BehaviorSubject<IJob[]>([]);
  jobs$ = this.jobsSubject.asObservable();

  constructor(
    private trabajoService: TrabajoService,
    private toastr: ToastrService
  ) {}

  addJob(job: IJob): void {
    this.trabajoService.agregarTrabajo(job).subscribe({
      next: () => {
        const actual = this.jobsSubject.value;
        this.jobsSubject.next([...actual, job]);
        this.toastr.success('Created new Job');
      },
      error: (error: HttpErrorResponse) => {
        this.toastr.error(`Error adding job: ${error.message}`, 'Error');
      },
    });
  }

  updateJob(job: IJob): void {
    this.trabajoService.actualizarTrabajo(job).subscribe({
      next: (updatedJob: IJob) => {
        const updated = this.jobsSubject.value.map((j) =>
          j.id === updatedJob.id ? updatedJob : j);
        this.jobsSubject.next(updated);
        this.toastr.success('Job updated successfully');
      },
      error: (error: HttpErrorResponse) => {
        this.toastr.error(`Error updating job: ${error.message}`, 'Error');
      },
    });
  }

  deleteJob(id: number): void {
    this.trabajoService.eliminarTrabajo(id).subscribe({
      next: () => {
        const updated = this.jobsSubject.value.filter((j) => j.id !== id);
        this.jobsSubject.next(updated);
        this.toastr.success('Job deleted successfully');
      },
      error: (error: HttpErrorResponse) => {
        this.toastr.error(`Error deleting job: ${error.message}`, 'Error');
      },
    });
  }

  getByIds(ids: number[]): Observable<IJob[]> {
    return this.jobs$.pipe(
      map((jobs) => jobs.filter((j) => ids.includes(j.id)))
    );
  }
}
