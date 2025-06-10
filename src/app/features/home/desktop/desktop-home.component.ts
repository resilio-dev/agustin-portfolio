import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { finalize } from 'rxjs';
import { IUsuario } from 'modelos/IUsuario';
import { UsuarioService } from 'src/app/servicios/api/usuario.service';
import { LoginService } from 'src/app/servicios/login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './desktop-home.component.html',
  styleUrls: ['./desktop-home.component.less'],
})
export class DesktopHomeComponent implements OnInit {
  emoteInicio = faUserGraduate;
  usuario?: IUsuario;

  constructor(
    private usuarioService: UsuarioService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  obtenerUsuario() {
    this.usuarioService
      .obtenerUsuario()
      .pipe(
        finalize(() => {
          if (!this.usuario) {
            this.usuario = {
              id: 1,
              nombre: 'Agustin',
              apellido: 'Collueque',
              edad: 27,
              descripcion:
                'I like to craft solid and scalable frontend products with great user experiences.',
              email: 'agustincv1997@gmail.com',
              foto: '#',
            } as IUsuario;
          }
        })
      )
      .subscribe({
        next: (response: IUsuario) => {
          this.usuario = response;
        },
        error: (error: HttpErrorResponse) => {
          console.error(error.message);
        },
      });
  }

  editarUsuario(usuario: NgForm) {
    this.usuarioService.editarUsuario(usuario.value).subscribe({
      next: () => {
        usuario.reset();
        this.obtenerUsuario();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  estaLogeado(): boolean {
    return this.loginService.estaLogeado();
  }
}
