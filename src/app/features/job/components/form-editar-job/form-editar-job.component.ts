import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IJob } from 'src/app/core/models/IJob.model';

@Component({
  selector: 'app-form-editar-job',
  imports: [CommonModule, FormsModule],
  templateUrl: './form-editar-job.component.html',
  styleUrl: './form-editar-job.component.less'
})
export class FormEditarJobComponent {
  @Input() job?: IJob;
  @Output() editar = new EventEmitter<IJob>();

  editarTrabajo() {
    this.editar.emit(this.job);
  }
}
