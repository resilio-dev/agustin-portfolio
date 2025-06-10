import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFormacion } from 'modelos/IFormacion';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {
  private url:string = 'https://portfolioacv.herokuapp.com';
  constructor(private http: HttpClient) { }

  public obtenerFormacion(id:Number):Observable<IFormacion> {
    return this.http.get<IFormacion>(`${this.url}/formaciones/${id}`)
  }

  public obtenerFormaciones():Observable<IFormacion[]>{
    return this.http.get<IFormacion[]>(`${this.url}/formaciones`)
  }

  public agregarFormacion(formacion :IFormacion):Observable<IFormacion> {
    return this.http.post<IFormacion>(`${this.url}/formaciones/agregar`, formacion)
  }

  public actualizarFormacion(formacion :IFormacion):Observable<IFormacion> {
    return this.http.post<IFormacion>(`${this.url}/formaciones/editar`, formacion)
  }

  public eliminarFormacion(id:Number):Observable<void> {
    return this.http.delete<void>(`${this.url}/formaciones/eliminar/${id}`);
  }
}
