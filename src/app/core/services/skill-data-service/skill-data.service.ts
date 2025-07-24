import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISkill } from '../../models/ISkill.model';
import { HabilidadService } from '../skill-service/habilidad.service';

@Injectable({ providedIn: 'root' })
export class SkillDataService {
  private skillsSubject = new BehaviorSubject<ISkill[]>([]);
  skills$ = this.skillsSubject.asObservable();

  constructor(private skillService: HabilidadService) {}

  loadSkills(): void {
    this.skillService.obtenerHabilidades().subscribe((skills) => {
      this.skillsSubject.next(skills);
    });
  }

  getCurrentSkills(): ISkill[] {
    return this.skillsSubject.getValue();
  }
}
