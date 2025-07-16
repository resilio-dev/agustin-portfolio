import { Component } from '@angular/core';
import { SobreMiComponent } from "./components/about-me/sobre-mi.component";
import { FormationComponent } from "./components/formation/formation.component";

@Component({
  selector: 'app-formacion',
  standalone: true,
  imports: [SobreMiComponent, FormationComponent],
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.less']
})
export class FormacionComponent {
}
