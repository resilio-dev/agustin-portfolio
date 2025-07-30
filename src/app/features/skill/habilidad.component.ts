import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HabilidadService } from 'src/app/core/services/skill-service/habilidad.service';
import { FormsModule } from '@angular/forms';
import { ISkill } from 'src/app/core/models/ISkill.model';
import { CommonModule } from '@angular/common';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { SkillFormComponent } from './components/skill-form/skill-form.component';
import { ModalActionsButtonComponent } from 'src/app/shared/components/modal-actions-button/modal-actions-button.component';
import { ToastrService } from 'ngx-toastr';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { LoginService } from 'src/app/core/services/auth-service/login/login.service';
import { SkillDataService } from 'src/app/core/services/skill-data-service/skill-data.service';

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
export class HabilidadComponent implements OnInit {
  habilidades: ISkill[] = [];
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
    private habilidadService: HabilidadService,
    private skillDataService: SkillDataService,
    private toastr: ToastrService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.skillDataService.skills$.subscribe((skills) => this.habilidades = skills)
    this.groupSkillsByType();
  }

  groupSkillsByType() {
    this.groupedSkills = this.habilidades.reduce((acc, skill) => {
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
    this.habilidadService.agregarHabilidad(formHab).subscribe({
      next: () => {
        this.toastr.success('Created new skill');
      },
      error: (error: HttpErrorResponse) => {
        const mensaje =
          error.error?.message ||
          'An error ocurred while the skill was creating.';
        this.toastr.error(mensaje, 'Error');
      },
    });
  }

  eliminarHabilidad(id: number) {
    this.habilidadService.eliminarHabilidad(id).subscribe({
      next: () => {
        this.toastr.success(
          'Skill with ID ' + id + ' deleted.',
          'Submitted Skill'
        );
      },
      error: (err: HttpErrorResponse) => {
        const error =
          err.error?.message ||
          'An error ocurred while the skill was deleting.';
        this.toastr.error(error);
      },
    });
  }

  editarHabilidad(hab: ISkill) {
    this.habilidadService.actualizarHabilidad(hab).subscribe({
      next: () => {
        this.toastr.success('Updated skill.', 'Submitted Skill');
      },
      error: (err: HttpErrorResponse) => {
        const error =
          err.error?.message ||
          'An error ocurred while the skill was updating.';
        this.toastr.error(error);
      },
    });
  }

  isLogin(): boolean {
    return this.loginService.isLogin();
  }
}
