import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-icon',
  standalone: true,
  imports: [],
  templateUrl: './nav-icon.component.html',
  styleUrls: ['./nav-icon.component.less']
})
export class NavIconComponent implements OnInit {
  @Input() link!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
