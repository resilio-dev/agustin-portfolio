import { HttpErrorResponse } from '@angular/common/module.d-CnjH8Dlt';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/core/services/contact-service/contact.service';
import { FormContactComponent } from 'src/app/features/contact/components/form-contact/form-contact.component';

@Component({
  selector: 'app-contacto',
  imports: [FormContactComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.less',
})
export class ContactoComponent {

  constructor(
    private toastr: ToastrService,
    private contactService: ContactService
  ) {}

  enviarMensaje(data: { name: string; email: string; message: string }): void {
    this.contactService.enviarMensaje(data).subscribe({
      next: (response: {message: string}) => {
        this.toastr.success(
          'Thanks for writing to me ' + data.name +'!',
          response.message
        );
      },
      error: (error: HttpErrorResponse) => {
        const mensaje =
          error.error?.message || 'Error sending the message..';
        this.toastr.error(mensaje, 'Error');
      },
    });
  }
}
