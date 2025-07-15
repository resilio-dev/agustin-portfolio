import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { IUser } from 'src/app/core/models/IUser.model';
import { UserService } from 'src/app/core/services/user-service/user.service';
import { ITema } from 'src/app/shared/services/multitemas/itema.interface';
import { TemaService } from 'src/app/shared/services/multitemas/tema.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './desktop-home.component.html',
  styleUrls: ['./desktop-home.component.less'],
})
export class DesktopHomeComponent implements OnInit {
  usuario?: IUser;
  temaActual!: ITema;

  constructor(
    private usuarioService: UserService,
    private temaService: TemaService
  ) {}

  ngOnInit(): void {
    this.obtenerUsuario();
    this.temaService.temaActual$.subscribe((tema) => this.temaActual = tema)
  }

  obtenerUsuario() {
    this.usuarioService
      .obtenerUsuario(1)
      .pipe(
        finalize(() => {
          if (!this.usuario) {
            this.usuario = {
              id: 1,
              name: 'Agustin',
              lastName: 'Collueque',
              age: 27,
              description:
                'I like to craft solid and scalable frontend products with great user experiences.',
              email: 'agustincv1997@gmail.com',
              picture: '#',
              projects: [],
              jobs: [],
              skills: []
            } as IUser;
          }
        })
      )
      .subscribe({
        next: (response: IUser) => {
          this.usuario = response;
        },
        error: (error: HttpErrorResponse) => {
          console.error(error.message);
        },
      });
  }
}
