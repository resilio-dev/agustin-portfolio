import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { IProject } from '../../models/IProject.model';
import { ProyectoService } from '../project-service/project.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/module.d-CnjH8Dlt';

@Injectable({
  providedIn: 'root',
})
export class ProjectDataService {
  projectsSubject = new BehaviorSubject<IProject[]>([]);
  projects$ = this.projectsSubject.asObservable();

  constructor(
    private projectService: ProyectoService,
    private toastr: ToastrService
  ) {}

  setProjects(projects: IProject[]) {
    this.projectsSubject.next(projects);
  }

  addProject(project: IProject) {
    this.projectService.agregarProyecto(project).subscribe({
      next: (newProject: IProject) => {
        const actual = this.projectsSubject.value;
        this.projectsSubject.next([...actual, newProject]);
        this.toastr.success('Created new project');
      },
      error: (error: HttpErrorResponse) => {
        const mensaje =
          error.error?.message ||
          'An error ocurred while the project was creating.';
        this.toastr.error(mensaje, 'Error');
      },
    });
  }

  updateProject(project: IProject) {
    this.projectService.actualizarProyecto(project).subscribe({
      next: (updatedProject: IProject) => {
        const updated = this.projectsSubject.value.map((p) =>
          p.id === project.id ? updatedProject : p
        );
        this.projectsSubject.next(updated);
        this.toastr.success('Updated project');
      },
      error: (error: HttpErrorResponse) => {
        const mensaje =
          error.error?.message ||
          'An error ocurred while the project was updating.';
        this.toastr.error(mensaje, 'Error');
      }})
  }

  deleteProject(id: number) {
    this.projectService.eliminarProyecto(id).subscribe({
      next: () => {
        const updated = this.projectsSubject.value.filter((p) => p.id !== id);
        this.projectsSubject.next(updated);
        this.toastr.success('Deleted project');
      },
      error: (error: HttpErrorResponse) => {
        const mensaje =
          error.error?.message ||
          'An error ocurred while the project was deleting.';
        this.toastr.error(mensaje, 'Error');
      },
    });
  }

  getByIds(ids: number[]): Observable<IProject[]> {
    return this.projects$.pipe(
      map((projects) => projects.filter((sk) => ids.includes(sk.id)))
    );
  }
}
