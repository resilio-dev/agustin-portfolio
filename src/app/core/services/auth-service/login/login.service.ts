import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ILoginRequest } from 'src/app/core/models/ILoginRequest.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private tokenSubject: BehaviorSubject<string | null>;

  constructor(private http: HttpClient) {
    const storedToken = localStorage.getItem('user-token');
    this.tokenSubject = new BehaviorSubject<string | null>(storedToken);
  }

  get token$(): Observable<string | null> {
    return this.tokenSubject.asObservable();
  }

  login(request: ILoginRequest): void {
    this.http.post<string>(`${environment.apiUrl}/login`, request).subscribe({
      next: (response) => {
        localStorage.setItem('user-token', response);
        this.tokenSubject.next(response);
      },
      error: (error) => console.error('Login error:', error.message)
    });
  }

  logout(): void {
    localStorage.removeItem('user-token');
    this.tokenSubject.next(null);
  }
  
  isLogin(): boolean {
    return this.tokenSubject.value !== null;
  }
}
