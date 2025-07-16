import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/core/models/IUser.model';
import { UserService } from 'src/app/core/services/user-service/user.service';
import { FormContactComponent } from 'src/app/features/contact/components/form-contact/form-contact.component';

@Component({
  selector: 'app-contacto',
  imports: [FormContactComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.less'
})
export class ContactoComponent implements OnInit {
  usuario?: IUser;

  constructor(private router :Router, private usuarioService: UserService){}
 
  ngOnInit(): void {
    this.usuarioService.obtenerUsuario(1).subscribe((user: IUser) => {
      this.usuario = user;
    })
  }

  irAHome() {
    this.router.navigateByUrl('/desktop/home')
  }
}
