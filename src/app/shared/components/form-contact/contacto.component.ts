import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { faMobileScreenButton, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
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
  telef = faMobileScreenButton;
  lugar = faLocationDot;
  email = faEnvelope;
  constructor(private usuarioService :UserService) { }

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

}
