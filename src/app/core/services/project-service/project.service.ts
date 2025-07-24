import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from '../../models/IProject.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProyectoService {
  private url: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  obtenerProyecto(id: number): Observable<IProject> {
    return this.http.get<IProject>(`${this.url}/proyectos/${id}`);
  }

  obtenerProyectos(): Observable<IProject[]> {
    return this.http.get<IProject[]>(`${this.url}/proyectos`);
  }

  actualizarProyecto(trabajo: IProject): Observable<void> {
    return this.http.put<void>(`${this.url}/proyectos/${trabajo.id}`, trabajo);
  }

  eliminarProyecto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/proyectos/${id}`);
  }

  agregarProyecto(trabajo: IProject): Observable<void> {
    return this.http.post<void>(`${this.url}/proyectos`, trabajo);
  }
}
