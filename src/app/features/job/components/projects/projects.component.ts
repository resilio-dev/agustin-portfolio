import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user-service/user.service';
import { IProject } from 'src/app/core/models/IProject.model';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, CardComponent, ModalComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less'],
})
export class ProjectsComponent implements OnInit {
  projects: IProject[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    /*this.userService.obtenerUsuario(1).subscribe((user) => {
     if (user) {
        this.projects = user?.projects;
      }
    });*/
  }

  estaLogeado(): boolean {
    return false;
  }
}
