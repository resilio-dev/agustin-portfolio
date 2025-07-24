import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ILoginRequest } from 'src/app/core/models/ILoginRequest.model';

@Component({
  selector: 'app-form-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.less'
})
export class FormLoginComponent implements OnInit {
  loginForm!: FormGroup;
  @Output() submitForm = new EventEmitter<ILoginRequest>();
  showPassword = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(50)]],
    });
  }

  login() {
    const loginReq :ILoginRequest = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.submitForm.emit(loginReq);
    this.loginForm.reset();
  }
}
