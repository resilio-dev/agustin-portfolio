import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProject } from '../../models/IProject.model';
import { AppDataService } from '../app-data-service/app-data.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectDataService {
  projects$ :Observable<IProject[]>;

  constructor(private appDataService: AppDataService) {
    this.projects$ = this.appDataService.appData$.pipe(
      map((data) => data?.projects ?? [])
    );
  }

  updateProjects(projects: IProject[]) {
    const user = this.appDataService.getDataValue();
    if (user) {
      this.appDataService.setData({ ...user, projects: projects });
    }
  }

  updateProjectSkills(id: number, newIds: number[]) {
    const user = this.appDataService.getDataValue();
    if (!user) return;
    const projects = user.projects.map((p) =>
      p.id === id ? { ...p, technologies: newIds } : p
    );
    this.updateProjects(projects);
  }

  getByIds(ids: number[]): Observable<IProject[]> {
    return this.projects$.pipe(
      map((projects) => projects.filter((sk) => ids.includes(sk.id)))
    );
  }
}
