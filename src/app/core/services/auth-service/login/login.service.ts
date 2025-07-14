import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginRequest } from 'src/app/core/models/ILoginRequest.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(request: ILoginRequest): void {
    this.http
      .post<string>(`${environment.apiUrl}/login`, request)
      .subscribe((response) => localStorage.setItem('user-token', response));
  }

  logout(): void {
    localStorage.removeItem('user-token');
  }

  estaLogeado(): boolean {
    return localStorage.getItem('user-token') != null;
  }
}
