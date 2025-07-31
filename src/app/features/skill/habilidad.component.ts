import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ISkill } from 'src/app/core/models/ISkill.model';
import { CommonModule } from '@angular/common';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { SkillFormComponent } from './components/skill-form/skill-form.component';
import { ModalActionsButtonComponent } from 'src/app/shared/components/modal-actions-button/modal-actions-button.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { LoginService } from 'src/app/core/services/auth-service/login/login.service';
import { SkillDataService } from 'src/app/core/services/skill-data-service/skill-data.service';
import { Observable, Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-habilidad',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent,
    FormsModule,
    SkillFormComponent,
    ModalActionsButtonComponent,
    SkillCardComponent,
  ],
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.less'],
})
export class HabilidadComponent implements OnInit, OnDestroy {
  skills$!: Observable<ISkill[] | null>;
  destroy$ = new Subject<void>();
  habilidadSeleccionada!: ISkill;
  showModalEdit = false;
  showModalDelete = false;

  groupedSkills: { [key: string]: ISkill[] } = {};

  skillTypes: string[] = [
    'LANGUAGE',
    'FRAMEWORK',
    'LIBRARY',
    'TOOL',
    'IDE',
    'PLATFORM',
    'SECURITY',
    'DATABASE',
  ];

  skillTypeLabels: { [key: string]: string } = {
    LANGUAGE: 'Languages',
    FRAMEWORK: 'Frameworks',
    LIBRARY: 'Libraries',
    TOOL: 'Tools',
    IDE: 'IDEs',
    PLATFORM: 'Platforms',
    SECURITY: 'Security',
    DATABASE: 'Databases',
  };

  constructor(
    private skillDataService: SkillDataService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.skills$ = this.skillDataService.skills$;

    this.skills$.pipe(takeUntil(this.destroy$)).subscribe((skills) => {
      if (skills) {
        this.groupedSkills = skills.reduce((acc, skill) => {
          if (!acc[skill.type]) {
            acc[skill.type] = [];
          }
          acc[skill.type].push(skill);
          return acc;
        }, {} as { [key: string]: ISkill[] });
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  groupSkillsByType() {
    this.groupedSkills = this.skillDataService.skillsSubject
      .getValue()
      .reduce((acc, skill) => {
        if (!acc[skill.type]) {
          acc[skill.type] = [];
        }
        acc[skill.type].push(skill);
        return acc;
      }, {} as { [key: string]: ISkill[] });
  }

  seleccionarHabilidad(habilidad: ISkill) {
    this.habilidadSeleccionada = habilidad;
  }

  agregarHabilidad(formHab: ISkill) {
    this.skillDataService.addSkill(formHab);
  }

  eliminarHabilidad(id: number) {
    this.skillDataService.removeSkill(id);
  }

  editarHabilidad(hab: ISkill) {
    this.skillDataService.updateSkill(hab);
  }

  isLogin(): boolean {
    return this.loginService.isLogin();
  }
}
