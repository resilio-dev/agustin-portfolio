import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-user',
  imports: [CommonModule],
  templateUrl: './info-user.component.html',
  styleUrl: './info-user.component.less'
})
export class InfoUserComponent {
  @Input() title!: string;
  @Input() mainPrase!: string;
  @Input() secondaryPhrase!: string;


  constructor(private router: Router) {}

  goToContact() {
    this.router.navigateByUrl("/desktop/contact")
  }
}
