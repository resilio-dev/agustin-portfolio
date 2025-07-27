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

  actualizarProyecto(trabajo: IProject): Observable<void> {
    return this.http.put<void>(ApiLinks.PROJECTS_ID(trabajo.id), trabajo);
  }

  eliminarProyecto(id: number): Observable<void> {
    return this.http.delete<void>(ApiLinks.PROJECTS_ID(id));
  }

  agregarProyecto(trabajo: IProject): Observable<void> {
    return this.http.post<void>(ApiLinks.PROJECTS(), trabajo);
  }
}
