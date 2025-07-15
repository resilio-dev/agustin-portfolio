import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from 'src/app/core/services/auth-service/login/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  response: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  login(formLogin: NgForm) {
    this.loginService.login(formLogin.value);
    formLogin.reset();
  }
}
