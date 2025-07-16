import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user-service/user.service';
import { TemaService } from 'src/app/shared/services/multitemas/tema.service';
import { ITema } from 'src/app/shared/services/multitemas/itema.interface';
import { IProject } from 'src/app/core/models/IProject.model';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../../shared/components/card/card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, CardComponent],
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
    this.userService.obtenerUsuario(1).subscribe((user) => {
     if (user) {
        this.projects = user?.projects;
      }
    });
  }
}
