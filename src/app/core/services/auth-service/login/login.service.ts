import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ApiLinks } from 'src/app/core/constants/ApiLinks';
import { ILoginRequest } from 'src/app/core/models/ILoginRequest.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private tokenSubject: BehaviorSubject<string | null>;

  constructor(
    private http: HttpClient
  ) {
    const storedToken = localStorage.getItem('user-token');
    this.tokenSubject = new BehaviorSubject<string | null>(storedToken);
  }

  get token$(): Observable<string | null> {
    return this.tokenSubject.asObservable();
  }

  login(request: ILoginRequest) {
    return this.http.post<{ token: string }>(ApiLinks.LOGIN(), request).pipe(
      tap((response) => {
        this.tokenSubject.next(response.token);
        localStorage.setItem('user-token', response.token);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('user-token');
    this.tokenSubject.next(null);
  }

  isLogin(): boolean {
    return this.tokenSubject.value !== null;
  }
}
