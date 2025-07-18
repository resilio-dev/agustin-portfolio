import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/core/models/IUser.model';
import { FormContactComponent } from 'src/app/features/contact/components/form-contact/form-contact.component';

@Component({
  selector: 'app-contacto',
  imports: [FormContactComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.less',
})
export class ContactoComponent implements OnInit {
  usuario?: IUser;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const aux = localStorage.getItem('user');
    if (aux != null) {
      const usuario: IUser = JSON.parse(aux) as IUser;
      this.usuario = usuario;
    }
  }

  irAHome() {
    this.router.navigateByUrl('/desktop');
  }

  enviarMensaje(data: { name: string; email: string; message: string }) {
    alert('¡Mensaje enviado!. Gracias por escribir ' + data.name);
  }
}
