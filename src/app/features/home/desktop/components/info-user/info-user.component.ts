import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/core/models/IUser.model';
import { ITema } from 'src/app/shared/services/multitemas/itema.interface';

@Component({
  selector: 'app-info-user',
  imports: [CommonModule],
  templateUrl: './info-user.component.html',
  styleUrl: './info-user.component.less'
})
export class InfoUserComponent {
  @Input() tema!: ITema;
  @Input() usuario?: IUser;

  constructor(private router: Router) {

  }

  irAContacto() {
    this.router.navigateByUrl("/desktop/contact")
  }
}
