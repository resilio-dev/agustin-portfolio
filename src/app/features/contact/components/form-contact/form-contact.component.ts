import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.less']
})
export class FormContactComponent {

  enviar(form: any) {
    console.log(form.value);
    alert('Mensaje enviado')
  }
}
