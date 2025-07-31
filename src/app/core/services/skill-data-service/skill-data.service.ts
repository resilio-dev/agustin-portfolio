import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ISkill } from '../../models/ISkill.model';
import { HabilidadService } from '../skill-service/habilidad.service';
import { HttpErrorResponse } from '@angular/common/module.d-CnjH8Dlt';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class SkillDataService {
  skillsSubject = new BehaviorSubject<ISkill[]>([]);
  skills$ = this.skillsSubject.asObservable();

  constructor(
    private skillService: HabilidadService,
    private toastr: ToastrService
  ) {}

  setSkills(skills: ISkill[]) {
    this.skillsSubject.next(skills);
  }

  getByIds(ids: number[]): Observable<ISkill[]> {
    return this.skills$.pipe(
      map((skills) => skills.filter((sk) => ids.includes(sk.id)))
    );
  }

  addSkill(skill: ISkill) {
    this.skillService.agregarHabilidad(skill).subscribe({
      next: (newSkill: ISkill) => {
        const actual = this.skillsSubject.value;
        this.skillsSubject.next([...actual, newSkill]);
        this.toastr.success('Created new skill');
      },
      error: (error: HttpErrorResponse) => {
        const message =
          error.error?.message ||
          'An error ocurred while the skill was creating.';
          this.toastr.error(message, 'Error creating new skill.');
      },
    });
  }

  updateSkill(skill: ISkill) {
    this.skillService.actualizarHabilidad(skill).subscribe({
      next: (updatedSkill: ISkill) => {
        const updated = this.skillsSubject.value.map((s) =>
          s.id === skill.id ? updatedSkill : s
        );
        this.skillsSubject.next(updated);
        this.toastr.success('Updated skill '+skill.name);
      },
      error: (err: HttpErrorResponse) => {
        const error =
          err.error?.message ||
          'An error ocurred while the skill was updating.';
        this.toastr.error(error);
      },
    });
  }

  removeSkill(id: number) {
    this.skillService.eliminarHabilidad(id).subscribe({
      next: () => {
        const actual = this.skillsSubject.value.filter(s => s.id !== id);
        this.skillsSubject.next(actual);
        this.toastr.success(
          'Skill with ID ' + id + ' deleted.'
        );
      },
      error: (err: HttpErrorResponse) => {
        const message =
          err.error?.message ||
          'An error ocurred while the skill was deleting.';
        this.toastr.error(message), 'Error removing skill.';
      },
    });
  }
}
