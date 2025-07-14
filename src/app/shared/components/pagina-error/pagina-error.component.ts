import { Component, OnInit } from '@angular/core';
import { faSadCry } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pagina-error',
  templateUrl: './pagina-error.component.html',
  styleUrls: ['./pagina-error.component.less']
})
export class PaginaErrorComponent implements OnInit {
  iconoPagError = faSadCry;
  constructor() { }

  ngOnInit(): void {
  }

}
