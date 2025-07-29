import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from 'src/app/core/services/auth-service/login/login.service';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { ILoginRequest } from 'src/app/core/models/ILoginRequest.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/module.d-CnjH8Dlt';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, FormLoginComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent {
  constructor(
    private loginService: LoginService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  login(loginReq: ILoginRequest) {
    this.loginService.login(loginReq).subscribe({
      next: (response) => {
        this.toastr.success('Redirect to /home', 'Login Successfuly', {
          timeOut: 2000,
        });
        this.router.navigateByUrl('/desktop');
      },
      error: (er: HttpErrorResponse) =>
        this.toastr.error(
          er.error.message || 'Credentials Invalid',
          er.message || 'Login Error'
        ),
    });
  }
}
