import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'src/app/core/models/IUser.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  obtenerUsuario(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.url}/usuarios/${id}`);
  }
}
