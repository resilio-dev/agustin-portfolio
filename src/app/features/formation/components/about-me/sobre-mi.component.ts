import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IDataUser } from 'src/app/core/models/IDataUser.model';
import { AboutMeService } from 'src/app/core/services/about-me-service/about-me.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.less'],
})
export class SobreMiComponent implements OnInit {
  data$!:Observable<IDataUser | null>
  constructor(private router: Router, private aboutMeService: AboutMeService) {}

  ngOnInit(): void {
    this.data$ = this.aboutMeService.aboutMe$;
  }

  irAContacto() {
    this.router.navigateByUrl('/contacto');
  }
}
