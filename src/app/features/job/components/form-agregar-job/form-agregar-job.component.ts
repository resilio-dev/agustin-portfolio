import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IJob } from 'src/app/core/models/IJob.model';

@Component({
  selector: 'app-form-agregar-job',
  imports: [FormsModule],
  templateUrl: './form-agregar-job.component.html',
  styleUrl: './form-agregar-job.component.less',
})
export class FormAgregarJobComponent {
  @Output() agregar = new EventEmitter<IJob>();

  agregarTrabajo(form: any) {
    this.agregar.emit(form as IJob);
  }
}
