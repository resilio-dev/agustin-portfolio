import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IJob } from '../../models/IJob.model';
import { ApiLinks } from '../../constants/ApiLinks';

@Injectable({
  providedIn: 'root',
})
export class TrabajoService {
  constructor(private http: HttpClient) {}

  obtenerTrabajo(id: number): Observable<IJob> {
    return this.http.get<IJob>(ApiLinks.JOBS_ID(id));
  }

  obtenerTrabajos(): Observable<IJob[]> {
    return this.http.get<IJob[]>(ApiLinks.JOBS());
  }

  actualizarTrabajo(trabajo: IJob): Observable<void> {
    return this.http.put<void>(ApiLinks.JOBS_ID(trabajo.id), trabajo);
  }

  eliminarTrabajo(id: number): Observable<void> {
    return this.http.delete<void>(ApiLinks.JOBS_ID(id));
  }

  agregarTrabajo(trabajo: IJob): Observable<void> {
    return this.http.post<void>(ApiLinks.JOBS(), trabajo);
  }
}
