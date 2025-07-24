import { HttpErrorResponse } from '@angular/common/module.d-CnjH8Dlt';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
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

  constructor(private router: Router, private toastr : ToastrService) {}

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

  enviarMensaje(data: { name: string; email: string; message: string }) :void{
    this.enviarMesajeSimulado().subscribe({
      next: () => {
        this.toastr.success('Thanks for writing to me '+data.name+' !', 'Message sent successfully');
      },
      error: (error: HttpErrorResponse) => {
        const mensaje = error.error?.message || 'Ocurrió un error al enviar el mensaje.';
        this.toastr.error(mensaje, 'Error');
      },
    })
  }
  
  enviarMesajeSimulado() {
    return of(null)
  }
}
