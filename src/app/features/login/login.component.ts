import { Component, EventEmitter, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  response: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  login(formLogin: NgForm) {
    this.loginService
      .login(formLogin.value)
      .then(() => {
        console.log('Has iniciado sesión');
        this.response.emit(true);
      })
      .catch((error) => {
        console.log('No se pudo iniciar sesión', error);
        this.response.emit(false);
      })
      .finally(() => formLogin.reset());
  }
}
