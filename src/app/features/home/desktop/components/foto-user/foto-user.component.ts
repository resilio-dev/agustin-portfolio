import { Component, Input, AfterViewInit, ElementRef } from '@angular/core'
import { GsapService } from 'src/app/core/services/gsap-service/gsap.service';
import { TemaService } from 'src/app/shared/services/multitemas/tema.service';

@Component({
  selector: 'app-foto-user',
  standalone: true,
  templateUrl: './foto-user.component.html',
  styleUrls: ['./foto-user.component.less']
})
export class FotoUserComponent implements AfterViewInit {
  @Input() urlImg!: string;
  @Input() completeName!: string;

  constructor(private gsap: GsapService, private el: ElementRef) {}

  ngAfterViewInit() {
    const card = this.el.nativeElement.querySelector('.photo-frame');
    const img = this.el.nativeElement.querySelector('.img-container img');

    const tl = this.gsap.timeline();

    tl.from(card, {
      x: 100,
      opacity: 0,
      scale: 0,
      duration: 1,
      ease: 'circ.in'
    })
    .from(img, {
      x: 100,
      opacity: 0,
      scale: 0,
      duration: 1,
      ease: 'power1.in'
    });
  }
}
