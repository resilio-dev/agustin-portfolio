import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from 'src/app/core/services/auth-service/login/login.service';
import { FormLoginComponent } from "./components/form-login/form-login.component";
import { ILoginRequest } from 'src/app/core/models/ILoginRequest.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, FormLoginComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent {
  constructor(private loginService: LoginService) {}

  login(loginReq: ILoginRequest) {
    //this.loginService.login(loginReq);
  }
}
