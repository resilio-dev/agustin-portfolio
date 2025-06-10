import { Component, OnInit } from '@angular/core';
import { IProject } from './models/IProject.interface';
import { UserService } from 'src/app/core/services/user-service/user.service';
import { TemaService } from 'src/app/shared/services/multitemas/tema.service';
import { ITema } from 'src/app/shared/services/multitemas/itema.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less'],
})
export class ProjectsComponent implements OnInit {
  temaActual!: ITema;
  projects: IProject[] = [
    
  ];
  constructor(private userService: UserService, private temaService: TemaService) {}

  ngOnInit(): void {
    this.temaService.temaActual$.subscribe((theme)=> this.temaActual = theme);
    this.userService.obtenerUsuario().subscribe((user) => {
     if (user) {
        this.projects = user?.projects;
      }
    });
  }
}
