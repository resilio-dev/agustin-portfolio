import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent {
  @Input() titulo?:string;
  show = false;

  public toggleModal() {
    this.show = !this.show;
  }
}
