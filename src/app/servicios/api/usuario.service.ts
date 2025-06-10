import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IUsuario } from 'src/app/core/models/IUsuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url: string = '#';
  constructor(private http: HttpClient) {}

  public obtenerUsuario(): Observable<IUsuario> {
    //return this.http.get<IUsuario>(`${this.url}/usuarios/1`);
    return of();
  }

  public obtenerUsuarios(): Observable<IUsuario[]> {
    //return this.http.get<IUsuario[]>(`${this.url}/usuarios`);
    return of();
  }

  public agregarUsuario(usuario: IUsuario): Observable<void> {
    //return this.http.post<void>(`${this.url}/usuarios/agregar`, usuario);
    return of();
  }

  public editarUsuario(usuario: IUsuario): Observable<IUsuario> {
    //return this.http.post<IUsuario>(`${this.url}/usuarios/editar`, usuario);
    return of();
  }
}
