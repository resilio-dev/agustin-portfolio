import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/core/models/IUser.model';

@Component({
  selector: 'app-info-user',
  imports: [CommonModule],
  templateUrl: './info-user.component.html',
  styleUrl: './info-user.component.less'
})
export class InfoUserComponent {
  @Input() usuario?: IUser;

  constructor(private router: Router) {

  }

  irAContacto() {
    this.router.navigateByUrl("/desktop/contact")
  }
}
