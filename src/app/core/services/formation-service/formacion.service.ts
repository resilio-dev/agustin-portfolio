import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFormation } from '../../models/IFormation.model';
import { ApiLinks } from '../../constants/ApiLinks';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {
  constructor(private http: HttpClient) { }

  obtenerFormacion(id:number):Observable<IFormation> {
    return this.http.get<IFormation>(ApiLinks.FORMATIONS_ID(id))
  }

  obtenerFormaciones():Observable<IFormation[]>{
    return this.http.get<IFormation[]>(ApiLinks.FORMATIONS())
  }

  agregarFormacion(formacion :IFormation):Observable<IFormation> {
    return this.http.post<IFormation>(ApiLinks.FORMATIONS(), formacion)
  }

  actualizarFormacion(formacion :IFormation):Observable<IFormation> {
    return this.http.put<IFormation>(ApiLinks.FORMATIONS_ID(formacion.id), formacion)
  }

  eliminarFormacion(id:number):Observable<void> {
    return this.http.delete<void>(ApiLinks.FORMATIONS_ID(id));
  }
}
