import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ILoginRequest } from 'src/app/core/models/ILoginRequest.model';

@Component({
  selector: 'app-form-login',
  imports: [FormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.less'
})
export class FormLoginComponent {
  @Output() loginForm = new EventEmitter<ILoginRequest>();

  login(form: HTMLFormElement) {
    const loginReq :ILoginRequest = form. as ILoginRequest;
    this.loginForm.emit(loginReq);
    form.reset();
  }
}
