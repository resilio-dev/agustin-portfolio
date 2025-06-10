import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHabilidad } from 'modelos/IHabilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  private url:string = 'https://portfolioacv.herokuapp.com';
  constructor(private http: HttpClient) { }

  public obtenerHabilidad(id:number):Observable<IHabilidad> {
    return this.http.get<IHabilidad>(`${this.url}/habilidades/${id}`);
  }

  public obtenerHabilidades():Observable<IHabilidad[]> {
    return this.http.get<IHabilidad[]>(`${this.url}/habilidades`);
  }

  public agregarHabilidad(habilidad:IHabilidad):Observable<IHabilidad> {
      return this.http.post<IHabilidad>(`${this.url}/habilidades/agregar`,habilidad);
  }

  public agregarHabilidad2(habilidad:IHabilidad, idUsuario:number):Observable<IHabilidad> {
    return this.http.post<IHabilidad>(`${this.url}/habilidades/agregar/${idUsuario}`, habilidad);
  }

  public actualizarHabilidad(habilidad:IHabilidad):Observable<IHabilidad> {
    return this.http.post<IHabilidad>(`${this.url}/habilidades/editar`, habilidad);
  }

  public eliminarHabilidad(id:number):Observable<void> {
    return this.http.delete<void>(`${this.url}/habilidades/eliminar/${id}`);
  }
}
