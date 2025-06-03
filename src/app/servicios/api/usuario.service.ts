import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsuario } from 'src/app/modelos/IUsuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url: string = 'https://portfolioacv.herokuapp.com';
  constructor(private http: HttpClient) {}

  public obtenerUsuario(): Observable<IUsuario> {
    return this.http.get<IUsuario>(`${this.url}/usuarios/1`);
  }

  public obtenerUsuarios(): Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(`${this.url}/usuarios`);
  }

  public agregarUsuario(usuario: IUsuario): Observable<void> {
    return this.http.post<void>(`${this.url}/usuarios/agregar`, usuario);
  }

  public editarUsuario(usuario: IUsuario): Observable<IUsuario> {
    return this.http.post<IUsuario>(`${this.url}/usuarios/editar`, usuario);
  }
}
