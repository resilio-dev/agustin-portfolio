import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/core/models/IProject.model';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ProyectoService } from 'src/app/core/services/project-service/project.service';
import { HttpErrorResponse } from '@angular/common/module.d-CnjH8Dlt';
import { ProjectFormComponent } from "../project-form/project-form.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ModalComponent,
    ProjectFormComponent
],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less'],
})
export class ProjectsComponent implements OnInit {
  projects: IProject[] = [];
  proyectoSeleccionado!: IProject;

  constructor(private proyService: ProyectoService) {}

  ngOnInit(): void {
    this.proyService.obtenerProyectos().subscribe({
      next: (proys: IProject[]) => {
        this.projects = proys;
        console.log(proys)
      },
      error: (er: HttpErrorResponse) => console.error(er.message)
    });
  }

  seleccionarProyecto(proy: IProject) {
    this.proyectoSeleccionado = proy;
  }

  agregarProyecto(proy: IProject) {
    alert('proyecto agregado');
  }

  editarProyecto(proy: IProject) {
    alert('proyecto editado');
  }

  estaLogeado(): boolean {
    return localStorage.getItem('user') != null;
  }
}
