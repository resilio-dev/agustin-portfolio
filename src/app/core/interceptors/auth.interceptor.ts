import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { LoginService } from '../services/auth-service/login/login.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const loginService = inject(LoginService);
  const token = loginService.isLogin() ? localStorage.getItem('user-token') : null;

  if (token && !req.url.endsWith('/login') && !req.url.endsWith('/public')) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(authReq);
  }

  return next(req);
};
