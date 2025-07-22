import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISkill } from '../../models/ISkill.model';
import { HabilidadService } from '../skill-service/habilidad.service';

@Injectable({ providedIn: 'root' })
export class SkillService {
  private skillsSubject = new BehaviorSubject<ISkill[]>([
    { id: 1, name: 'Angular', logo: '#' },
    { id: 2, name: 'Spring', logo: '#' },
    { id: 3, name: 'MySQL', logo: '#' },
    { id: 4, name: 'Figma', logo: '#' },
    { id: 5, name: 'Angular', logo: '#' },
    { id: 6, name: 'Spring', logo: '#' },
    { id: 7, name: 'MySQL', logo: '#' },
    { id: 8, name: 'Figma', logo: '#' },
    { id: 9, name: 'Angular', logo: '#' },
    { id: 10, name: 'Spring', logo: '#' },
    { id: 11, name: 'MySQL', logo: '#' },
    { id: 12, name: 'Figma', logo: '#' },
    { id: 13, name: 'Angular', logo: '#' },
    { id: 14, name: 'Spring', logo: '#' },
    { id: 15, name: 'MySQL', logo: '#' },
    { id: 16, name: 'Figma', logo: '#' },
  ]);
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
