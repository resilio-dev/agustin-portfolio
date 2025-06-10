import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { finalize } from 'rxjs';
import { IUsuario } from 'modelos/IUsuario';
import { UsuarioService } from 'src/app/servicios/api/usuario.service';
import { ITema } from 'src/app/servicios/multitemas/itema-interface';
import { TemaService } from 'src/app/servicios/multitemas/tema.service';

@Component({
  selector: 'app-home',
  templateUrl: './desktop-home.component.html',
  styleUrls: ['./desktop-home.component.less'],
})
export class DesktopHomeComponent implements OnInit {
  emoteInicio = faUserGraduate;
  usuario?: IUsuario;
  temaActual!: ITema;

  constructor(
    private usuarioService: UsuarioService,
    private temaService: TemaService
  ) {}

  ngOnInit(): void {
    this.obtenerUsuario();
    this.temaService.temaActual$.subscribe((tema) => this.temaActual = tema)
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
}
