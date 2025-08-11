import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';
import SplitType from 'split-type';
import { GsapService } from 'src/app/core/services/gsap-service/gsap.service';

@Component({
  selector: 'app-info-user',
  imports: [CommonModule],
  templateUrl: './info-user.component.html',
  styleUrl: './info-user.component.less',
})
export class InfoUserComponent {
  @Input() title!: string;
  @Input() mainPrase!: string;
  @Input() secondaryPhrase!: string;

  constructor(
    private router: Router,
    private el: ElementRef,
    private gsap: GsapService
  ) {}

  goToProphile() {
    this.router.navigateByUrl('/sobre-mi');
  }

  ngAfterViewInit() {
    const title = this.el.nativeElement.querySelector('.titulo-destacado');
    const orbe = this.el.nativeElement.querySelector('.orbe');
    const button = this.el.nativeElement.querySelector('.call-button');

    const tl = this.gsap.timeline();

    tl.from(title, {
      opacity: 0,
      scale: 0,
      duration: 1.2,
      ease: 'elastic.in(1, 0.8)',
    })
    .from(orbe, {
      opacity: 0,
      scale: 0,
      duration: 0.4,
      ease: 'elastic.in',
    })
    .from(button, {
      duration: 0.6,
      opacity: 0,
      y: -200,
      ease: 'elastic.out(1, 0.8)'
    });

    const paragraph = this.el.nativeElement.querySelector('p');

    const split = new SplitType(paragraph, { types: 'words,chars' });
    split.chars!.forEach((char, index) => {
      this.gsap.from(char, {
        opacity: 0,
        y: this.gsap.utils().random(-150, 150),
        x: this.gsap.utils().random(-300, 300),
        rotate: this.gsap.utils().random(-360, 360),
        scale: this.gsap.utils().random(0, 2),
        duration: 0.90,
        ease: "back.out",
        delay: index * 0.01,
      });
    });
  }
}
