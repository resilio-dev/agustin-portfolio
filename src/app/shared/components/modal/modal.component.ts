import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less'],
})
export class ModalComponent implements AfterViewInit {
  @ViewChild('modalContainer') modalContainer!: ElementRef;
  @Input() titulo?: string;
  show = false;

  public toggleModal() {
    this.show = !this.show;
  }

  ngAfterViewInit() {
    if (this.show) {
      this.modalContainer?.nativeElement?.focus();
    }
  }
}
