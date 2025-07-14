import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IJob } from '../../models/IJob.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrabajoService {
  private url:string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  public obtenerTrabajo(id:number):Observable<IJob> {
    return this.http.get<IJob>(`${this.url}/trabajos/${id}`);
  }

  public obtenerTrabajos():Observable<IJob[]> {
    return this.http.get<IJob[]>(`${this.url}/trabajos`);
  }

  public actualizarTrabajo(trabajo:IJob):Observable<void> {
    return this.http.put<void>(`${this.url}/trabajos/${trabajo.id}`,trabajo);
  }

  public eliminarTrabajo(id:number):Observable<void> {
    return this.http.delete<void>(`${this.url}/trabajos/${id}`);
  }

  public agregarTrabajo(trabajo:IJob):Observable<void> {
    return this.http.post<void>(`${this.url}/trabajos`,trabajo);
  }
}
