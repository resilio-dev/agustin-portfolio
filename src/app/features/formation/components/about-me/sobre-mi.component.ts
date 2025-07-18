import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/models/IUser.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.less'],
})
export class SobreMiComponent implements OnInit {
  usuario?: IUser;
  constructor(private router: Router) {}

  ngOnInit(): void {
    const aux = localStorage.getItem('user');
    if (aux != null) {
      const usuario: IUser = JSON.parse(aux) as IUser;
      this.usuario = usuario;
    }
  }

  irAContacto() {
    this.router.navigateByUrl('/desktop/contact');
  }
}
