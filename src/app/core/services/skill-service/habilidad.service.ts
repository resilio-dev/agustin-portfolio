import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISkill } from '../../models/ISkill.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  private url:string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  obtenerHabilidad(id:number):Observable<ISkill> {
    return this.http.get<ISkill>(`${this.url}/habilidades/${id}`);
  }

  obtenerHabilidades():Observable<ISkill[]> {
    return this.http.get<ISkill[]>(`${this.url}/habilidades`);
  }

  agregarHabilidad(habilidad:ISkill):Observable<ISkill> {
      return this.http.post<ISkill>(`${this.url}/habilidades/agregar`,habilidad);
  }

  agregarHabilidad2(habilidad:ISkill, idUsuario:number):Observable<ISkill> {
    return this.http.post<ISkill>(`${this.url}/habilidades/agregar/${idUsuario}`, habilidad);
  }

  actualizarHabilidad(habilidad:ISkill):Observable<ISkill> {
    return this.http.post<ISkill>(`${this.url}/habilidades/editar`, habilidad);
  }

  eliminarHabilidad(id:number):Observable<void> {
    return this.http.delete<void>(`${this.url}/habilidades/eliminar/${id}`);
  }
}
