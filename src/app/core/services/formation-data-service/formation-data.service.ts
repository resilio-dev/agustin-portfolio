import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { IFormation } from '../../models/IFormation.model';
import { FormacionService } from '../formation-service/formacion.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/module.d-CnjH8Dlt';

@Injectable({
  providedIn: 'root',
})
export class FormationDataService {
  formationsSubject = new BehaviorSubject<IFormation[]>([]);
  formations$ = this.formationsSubject.asObservable();

  constructor(
    private formacionService: FormacionService,
    private toastr: ToastrService
  ) {}

  addFormation(formation: IFormation): void {
    this.formacionService.agregarFormacion(formation).subscribe({
      next: (newFormation: IFormation) => {
        const actual = this.formationsSubject.value;
        this.formationsSubject.next([...actual, newFormation]);
        this.toastr.success('Formation added successfully.', 'Success');
      },
      error: (err: HttpErrorResponse) => {
        const error =
          err.error?.message || 'An error occurred while adding the formation.';
        this.toastr.error(error, 'Error');
      },
    });
  }

  updateFormation(formation: IFormation): void {
    this.formacionService.actualizarFormacion(formation).subscribe({
      next: (updatedFormation: IFormation) => {
        const updated = this.formationsSubject.value.map((f) =>
          f.id === updatedFormation.id ? updatedFormation : f
        );
        this.formationsSubject.next(updated);
        this.toastr.success('Formation updated successfully.', 'Success');
      },
      error: (err: HttpErrorResponse) => {
        const error =
          err.error?.message ||
          'An error occurred while updating the formation.';
        this.toastr.error(error, 'Error');
      },
    });
  }

  deleteFormation(id: number): void {
    this.formacionService.eliminarFormacion(id).subscribe({
      next: () => {
        const updated = this.formationsSubject.value.filter(
          (f) => f.id !== id
        );
        this.formationsSubject.next(updated);
        this.toastr.success('Formation deleted successfully.', 'Success');
      },
      error: (err: HttpErrorResponse) => {
        const error =
          err.error?.message || 'An error occurred while deleting the formation.';
        this.toastr.error(error, 'Error');
      },
    });
  }

  getByIds(ids: number[]): Observable<IFormation[]> {
    return this.formations$.pipe(
      map((formations) => formations.filter((f) => ids.includes(f.id)))
    );
  }
}
