import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from 'modelos/IUsuario';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user$ = new BehaviorSubject<IUsuario | null>(null);
  private url: string = '#';
  constructor(private http: HttpClient) {
    this.http.get<IUsuario>(`${this.url}/usuarios/1`).subscribe({
      next: (user) => {
        this.user$.next(user);
      },
      error: (err) => console.error(err),
    });
  }

  obtenerUsuario(): Observable<IUsuario | null> {
    return this.user$.asObservable();
  }

  editarUsuario(usuario: IUsuario): Observable<IUsuario> {
    return this.http.post<IUsuario>(`${this.url}/usuarios/editar`, usuario);
  }
}
