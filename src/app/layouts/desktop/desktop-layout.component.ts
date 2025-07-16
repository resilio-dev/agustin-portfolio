import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarBottomComponent } from 'src/app/features/navbar-bottom/navbar-bottom.component';
import { NavbarComponent } from 'src/app/features/navbar/navbar.component';

@Component({
  selector: 'app-desktop-layout',
  standalone: true,
  imports: [NavbarComponent, NavbarBottomComponent, RouterOutlet],
  templateUrl: './desktop-layout.component.html',
  styleUrls: ['./desktop-layout.component.less'],
})
export class DesktopLayoutComponent {

}
