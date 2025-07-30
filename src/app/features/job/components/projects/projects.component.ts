import { Component, Input, OnInit } from '@angular/core';
import { IProject } from 'src/app/core/models/IProject.model';
import { CommonModule } from '@angular/common';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalActionsButtonComponent } from 'src/app/shared/components/modal-actions-button/modal-actions-button.component';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { ISkill } from 'src/app/core/models/ISkill.model';
import { ProjectFormComponent } from '../project-form/project-form.component';
import { ProjectDataService } from 'src/app/core/services/project-data-service/project-data.service';
import { combineLatest, map, Observable } from 'rxjs';
import { SkillDataService } from 'src/app/core/services/skill-data-service/skill-data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ModalComponent,
    ProjectFormComponent,
    ModalActionsButtonComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less'],
})
export class ProjectsComponent implements OnInit {
  @Input() userLogged!: boolean;
  projects$!: Observable<(IProject & { skillsDetails: ISkill[] })[]>;
  skillsNames: string[] = [];
  proyectoSeleccionado!: IProject;

  constructor(
    private projectDataService: ProjectDataService,
    private skillDataService: SkillDataService
  ) {}

  ngOnInit(): void {
    this.projects$ = combineLatest([
      this.projectDataService.projects$,
      this.skillDataService.skills$,
    ]).pipe(
      map(([projects, skills]) =>
        projects.map((p) => ({
          ...p,
          skillsDetails: skills.filter((h) => p.tecnologies.includes(h.id)),
        }))
      )
    );
  }

  getTecnologiesNameByIds(tecn: number[]) :string[] {
    let names :string[] = [];
    this.skillDataService.getByIds(tecn).subscribe((skills) => {
      names = skills.map(sk => sk.name);
    });
    return names;
  }

  seleccionarProyecto(proy: IProject) {
    this.proyectoSeleccionado = proy;
  }

  eliminarProyecto(id: number) {
    this.projectDataService.deleteProject(id);
  }
  
  editarProyecto(proy: IProject) {
    this.projectDataService.updateProject(proy);
  }

  agregarProyecto(proy: IProject) {
    this.projectDataService.addProject(proy);
  }
}
