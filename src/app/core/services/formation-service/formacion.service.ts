import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFormation } from '../../models/IFormation.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {
  private url:string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  obtenerFormacion(id:Number):Observable<IFormation> {
    return this.http.get<IFormation>(`${this.url}/formaciones/${id}`)
  }

  obtenerFormaciones():Observable<IFormation[]>{
    return this.http.get<IFormation[]>(`${this.url}/formaciones`)
  }

  agregarFormacion(formacion :IFormation):Observable<IFormation> {
    return this.http.post<IFormation>(`${this.url}/formaciones`, formacion)
  }

  actualizarFormacion(formacion :IFormation):Observable<IFormation> {
    return this.http.put<IFormation>(`${this.url}/formaciones/${formacion.id}`, formacion)
  }

  eliminarFormacion(id:Number):Observable<void> {
    return this.http.delete<void>(`${this.url}/formaciones/${id}`);
  }
}
