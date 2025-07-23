import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/core/models/IProject.model';
import { CommonModule } from '@angular/common';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ProyectoService } from 'src/app/core/services/project-service/project.service';
import { HttpErrorResponse } from '@angular/common/module.d-CnjH8Dlt';
import { ProjectFormComponent } from "../project-form/project-form.component";
import { ModalActionsButtonComponent } from 'src/app/shared/components/modal-actions-button/modal-actions-button.component';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { ISkill } from 'src/app/core/models/ISkill.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ModalComponent,
    ProjectFormComponent,
    ModalActionsButtonComponent
],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less'],
})
export class ProjectsComponent implements OnInit {
  projects: IProject[] = [
    {id: 1, title: 'Portfolio Web', imgSrc: '#', description: 'Creacion de mi propio Portfolio Web como SPA', linkDemo: '#', creationDate: '2025-07-23', tecnologies: [{id: 1, name: 'HTML5', logo: '#'}, {id:2, name: 'CSS3', logo: '#'}, {id: 3, name: 'JS', logo: '#'}]},
    {id: 2, title: 'Portfolio Web', imgSrc: '#', description: 'Creacion de mi propio Portfolio Web como SPA', linkDemo: '#', creationDate: '2025-07-23', tecnologies: [{id: 1, name: 'HTML5', logo: '#'}, {id:2, name: 'CSS3', logo: '#'}, {id: 3, name: 'JS', logo: '#'}]},
    {id: 3, title: 'Portfolio Web', imgSrc: '#', description: 'Creacion de mi propio Portfolio Web como SPA', linkDemo: '#', creationDate: '2025-07-23', tecnologies: [{id: 1, name: 'HTML5', logo: '#'}, {id:2, name: 'CSS3', logo: '#'}, {id: 3, name: 'JS', logo: '#'}]},
    {id: 4, title: 'Portfolio Web', imgSrc: '#', description: 'Creacion de mi propio Portfolio Web como SPA', linkDemo: '#', creationDate: '2025-07-23', tecnologies: [{id: 1, name: 'HTML5', logo: '#'}, {id:2, name: 'CSS3', logo: '#'}, {id: 3, name: 'JS', logo: '#'}]},
    {id: 5, title: 'Portfolio Web', imgSrc: '#', description: 'Creacion de mi propio Portfolio Web como SPA', linkDemo: '#', creationDate: '2025-07-23', tecnologies: [{id: 1, name: 'HTML5', logo: '#'}, {id:2, name: 'CSS3', logo: '#'}, {id: 3, name: 'JS', logo: '#'}]},
    {id: 6, title: 'Portfolio Web', imgSrc: '#', description: 'Creacion de mi propio Portfolio Web como SPA', linkDemo: '#', creationDate: '2025-07-23', tecnologies: [{id: 1, name: 'HTML5', logo: '#'}, {id:2, name: 'CSS3', logo: '#'}, {id: 3, name: 'JS', logo: '#'}]},
  ];
  proyectoSeleccionado!: IProject;

  constructor(private proyService: ProyectoService) {}

  ngOnInit(): void {
    this.proyService.obtenerProyectos().subscribe({
      next: (proys: IProject[]) => {
        this.projects = proys;
      },
      error: (er: HttpErrorResponse) => console.error(er.message)
    });
  }

  getTecnologies(tecn: ISkill[]) {
    return tecn.map(t => t.name)
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

  eliminarProyecto(id: number) {
    alert('proyecto eliminado');
  }

  estaLogeado(): boolean {
    return localStorage.getItem('user') != null;
  }
}
