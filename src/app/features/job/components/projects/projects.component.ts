import { Component, Input, OnInit } from '@angular/core';
import { IProject } from 'src/app/core/models/IProject.model';
import { CommonModule } from '@angular/common';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ProyectoService } from 'src/app/core/services/project-service/project.service';
import { HttpErrorResponse } from '@angular/common/module.d-CnjH8Dlt';
import { ModalActionsButtonComponent } from 'src/app/shared/components/modal-actions-button/modal-actions-button.component';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { ISkill } from 'src/app/core/models/ISkill.model';
import { ToastrService } from 'ngx-toastr';
import { ProjectFormComponent } from '../project-form/project-form.component';
import { AppDataService } from 'src/app/core/services/app-data-service/app-data.service';

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
  projects: IProject[] = [];
  proyectoSeleccionado!: IProject;

  constructor(
    private proyService: ProyectoService,
    private toastr: ToastrService,
    private appDataService: AppDataService
  ) {}

  ngOnInit(): void {
    this.projects = this.appDataService.getProjects();
  }

  getTecnologies(tecn: ISkill[]) {
    return tecn.map((t) => t.name);
  }

  seleccionarProyecto(proy: IProject) {
    this.proyectoSeleccionado = proy;
  }

  eliminarProyecto(id: number) {
    this.proyService.eliminarProyecto(id).subscribe({
      next: () => {
        this.toastr.success(
          'project with ID ' + id + ' deleted.',
          'Submitted project'
        );
      },
      error: (err: HttpErrorResponse) => {
        const error =
          err.error?.message ||
          'An error ocurred while the project was deleting.';
        this.toastr.error(error);
      },
    });
  }
  editarProyecto(proy: IProject) {
    this.proyService.actualizarProyecto(proy).subscribe({
      next: () => {
        this.toastr.success('Updated project.', 'Submitted project');
      },
      error: (err: HttpErrorResponse) => {
        const error =
          err.error?.message ||
          'An error ocurred while the project was updating.';
        this.toastr.error(error);
      },
    });
  }

  agregarProyecto(proy: IProject) {
    this.proyService.agregarProyecto(proy).subscribe({
      next: () => {
        this.toastr.success('Created new project.', 'Submitted project');
      },
      error: (err: HttpErrorResponse) => {
        const error =
          err.error?.message ||
          'An error ocurred while the project was creating.';
        this.toastr.error(error);
      },
    });
  }

  obtenerProyectos() {
    this.proyService.obtenerProyectos().subscribe({
      next: (proys: IProject[]) => {
        this.projects = proys;
      },
      error: (er: HttpErrorResponse) => {
        const error =
          er.error.message || 'We cannot load projects at this time.';
        this.toastr.error(error);
      },
    });
  }
}
