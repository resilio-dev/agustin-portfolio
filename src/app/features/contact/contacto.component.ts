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

  attemps = 0;
  attempsLimit = 2;

  trySend(data: { name: string; email: string; message: string }): void {
    if (this.canSend()) {
      this.contactService.enviarMensaje(data).subscribe({
        next: (response: { message: string }) => {
          this.toastr.success(
            'Thanks for writing to me ' + data.name + '!',
            response.message,
            {timeOut: 10000}
          );
          this.updateAttempts();
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message)
          const mensaje = error.message || "Por favor intente nuevamente en una hora.";
          this.toastr.error(mensaje, 'Error enviando el mensaje.', {timeOut: 10000});
        },
      });
    } else {
      this.showWaitMessage();
    }
  }

  updateAttempts() {
    this.attemps++;
  }

  canSend(): boolean {
    return this.attemps < this.attempsLimit;
  }

  showWaitMessage(): void {
    this.toastr.error(
      'Por favor espere una hora para enviarme otro mensaje.',
      'Límite de mensajes alcanzado.',
      {timeOut: 10000}
    );
  }
}
