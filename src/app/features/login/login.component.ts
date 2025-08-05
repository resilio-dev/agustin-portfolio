import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from 'src/app/core/services/auth-service/login/login.service';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { ILoginRequest } from 'src/app/core/models/ILoginRequest.model';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/module.d-CnjH8Dlt';
import { TemaService } from 'src/app/shared/services/multitemas/tema.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, FormLoginComponent, RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent {
  showHidde = false;
  constructor(
    private loginService: LoginService,
    private toastr: ToastrService,
    private router: Router,
    private themeService: TemaService
  ) {}

  login(loginReq: ILoginRequest) {
    this.loginService.login(loginReq).subscribe({
      next: () => {
        this.toastr.success('Redirect to /home', 'Login Successfuly', {
          timeOut: 2000,
        });
        this.router.navigateByUrl('/desktop');
      },
      error: (er: HttpErrorResponse) =>
        this.toastr.error(
          er.message || 'Login Error'
        ),
    });
  }

  toggleTheme() {
    this.themeService.toggleTema()
  }

  getTema() : 'light' | 'dark' {
    return this.themeService.getTemaActual()
  }
}
