import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { IUsuario } from 'src/app/modelos/IUsuario';
import { UsuarioService } from 'src/app/servicios/api/usuario.service';
import { LoginService } from 'src/app/servicios/login/login.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.less']
})
export class InicioComponent {
  emoteInicio = faUserGraduate;
  usuario?:IUsuario;

  constructor(private usuarioService: UsuarioService,
    private loginService: LoginService) { }

  obtenerUsuario() {
    this.usuarioService.obtenerUsuario().subscribe({
      next:(response: IUsuario) => {
        this.usuario = response;
      },
      error:(error: HttpErrorResponse) => {
        console.error(error.message);
      }
    })
  }

  editarUsuario(usuario: NgForm) {
    this.usuarioService.editarUsuario(usuario.value).subscribe({
      next:() => {
        usuario.reset();
        this.obtenerUsuario();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  estaLogeado():boolean {
    return this.loginService.estaLogeado();
  }

}
