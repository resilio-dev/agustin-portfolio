import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from 'src/app/core/services/auth-service/login/login.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { FormLoginComponent } from "./components/form-login/form-login.component";
import { ILoginRequest } from 'src/app/core/models/ILoginRequest.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ModalComponent, FormLoginComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent {
  constructor(private loginService: LoginService) {}

  login(loginReq: ILoginRequest) {
    this.loginService.login(loginReq);
  }
}
