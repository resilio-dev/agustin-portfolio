import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from '../../models/IProject.model';
import { ApiLinks } from '../../constants/ApiLinks';

@Injectable({
  providedIn: 'root',
})
export class ProyectoService {
  constructor(private http: HttpClient) {}

  obtenerProyecto(id: number): Observable<IProject> {
    return this.http.get<IProject>(ApiLinks.PROJECTS_ID(id));
  }

  obtenerProyectos(): Observable<IProject[]> {
    return this.http.get<IProject[]>(ApiLinks.PROJECTS());
  }

  actualizarProyecto(job: IProject): Observable<IProject> {
    return this.http.put<IProject>(ApiLinks.PROJECTS_ID(job.id), job);
  }

  eliminarProyecto(id: number) {
    return this.http.delete<void>(ApiLinks.PROJECTS_ID(id));
  }

  agregarProyecto(job: IProject): Observable<IProject> {
    return this.http.post<IProject>(ApiLinks.PROJECTS(), job);
  }
}
