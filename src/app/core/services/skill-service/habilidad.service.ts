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

  public obtenerHabilidad(id:number):Observable<ISkill> {
    return this.http.get<ISkill>(`${this.url}/habilidades/${id}`);
  }

  public obtenerHabilidades():Observable<ISkill[]> {
    return this.http.get<ISkill[]>(`${this.url}/habilidades`);
  }

  public agregarHabilidad(habilidad:ISkill):Observable<ISkill> {
      return this.http.post<ISkill>(`${this.url}/habilidades/agregar`,habilidad);
  }

  public agregarHabilidad2(habilidad:ISkill, idUsuario:number):Observable<ISkill> {
    return this.http.post<ISkill>(`${this.url}/habilidades/agregar/${idUsuario}`, habilidad);
  }

  public actualizarHabilidad(habilidad:ISkill):Observable<ISkill> {
    return this.http.post<ISkill>(`${this.url}/habilidades/editar`, habilidad);
  }

  public eliminarHabilidad(id:number):Observable<void> {
    return this.http.delete<void>(`${this.url}/habilidades/eliminar/${id}`);
  }
}
