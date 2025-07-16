import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from 'src/app/core/services/auth-service/login/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent {
  constructor(private loginService: LoginService) {}

  login(formLogin: NgForm) {
    this.loginService.login(formLogin.value);
    formLogin.reset();
  }
}
