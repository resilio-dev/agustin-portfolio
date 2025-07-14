import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from '../../models/IProject.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TrabajoService {
  private url: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  public obtenerProyecto(id: number): Observable<IProject> {
    return this.http.get<IProject>(`${this.url}/trabajos/${id}`);
  }

  public obtenerProyectos(): Observable<IProject[]> {
    return this.http.get<IProject[]>(`${this.url}/trabajos`);
  }

  public actualizarProyecto(trabajo: IProject): Observable<void> {
    return this.http.put<void>(`${this.url}/trabajos/${trabajo.id}`, trabajo);
  }

  public eliminarProyecto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/trabajos/${id}`);
  }

  public agregarProyecto(trabajo: IProject): Observable<void> {
    return this.http.post<void>(`${this.url}/trabajos`, trabajo);
  }
}
