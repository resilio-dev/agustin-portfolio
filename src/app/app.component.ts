import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './core/services/user-service/user.service';
import { IUser } from './core/models/IUser.model';
import { HttpErrorResponse } from '@angular/common/module.d-CnjH8Dlt';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  constructor(private usuarioService: UserService) {
    this.obtenerUsuario();
  }

  obtenerUsuario() {
    this.usuarioService.obtenerUsuario(1).subscribe({
      next: (usuario: IUser) => {
        console.log(usuario);
        localStorage.setItem('user', JSON.stringify(usuario));
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.message);
        const user: IUser = {
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
          formations: [],
          skills: [],
        } as IUser;
        localStorage.setItem('user', JSON.stringify(user));
      },
    });
  }
}
