import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISkill } from '../../models/ISkill.model';
import { ApiLinks } from '../../constants/ApiLinks';

@Injectable({
  providedIn: 'root',
})
export class HabilidadService {
  constructor(private http: HttpClient) {}

  obtenerHabilidad(id: number): Observable<ISkill> {
    return this.http.get<ISkill>(ApiLinks.SKILLS_ID(id));
  }

  obtenerHabilidades(): Observable<ISkill[]> {
    return this.http.get<ISkill[]>(ApiLinks.SKILLS());
  }

  agregarHabilidad(habilidad: ISkill): Observable<ISkill> {
    return this.http.post<ISkill>(ApiLinks.SKILLS(), habilidad);
  }

  actualizarHabilidad(habilidad: ISkill): Observable<ISkill> {
    return this.http.post<ISkill>(ApiLinks.SKILLS_ID(habilidad.id), habilidad);
  }

  eliminarHabilidad(id: number) {
    return this.http.delete<void>(ApiLinks.SKILLS_ID(id));
  }
}
