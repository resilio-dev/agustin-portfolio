import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/core/models/IUser.model';
import { UserService } from 'src/app/core/services/user-service/user.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.less']
})
export class ContactoComponent {
  usuario?:IUser;
  constructor(private usuarioService :UserService, private router: Router) { }

  obtenerUsuario() {
    this.usuarioService.obtenerUsuario(1).subscribe({
      next:(response :IUser) => {
        this.usuario = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  irAHome() {
    this.router.navigateByUrl("/desktop/home")
  }

}
