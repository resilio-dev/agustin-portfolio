import { HttpErrorResponse } from '@angular/common/module.d-CnjH8Dlt';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IUser } from 'src/app/core/models/IUser.model';
import { ContactService } from 'src/app/core/services/contact-service/contact.service';
import { FormContactComponent } from 'src/app/features/contact/components/form-contact/form-contact.component';

@Component({
  selector: 'app-contacto',
  imports: [FormContactComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.less',
})
export class ContactoComponent implements OnInit {
  usuario?: IUser;

  constructor(
    private toastr: ToastrService,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    const aux = localStorage.getItem('user');
    if (aux != null) {
      const usuario: IUser = JSON.parse(aux) as IUser;
      this.usuario = usuario;
    }
  }

  enviarMensaje(data: { name: string; email: string; message: string }): void {
    this.contactService.enviarMensaje(data).subscribe({
      next: () => {
        this.toastr.success(
          'Thanks for writing to me ' + data.name + ' !',
          'Message sent successfully'
        );
      },
      error: (error: HttpErrorResponse) => {
        const mensaje =
          error.error?.message || 'Ocurrió un error al enviar el mensaje.';
        this.toastr.error(mensaje, 'Error');
      },
    });
  }
}
