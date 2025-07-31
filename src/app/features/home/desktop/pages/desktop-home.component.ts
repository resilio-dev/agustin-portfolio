import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InfoUserComponent } from '../components/info-user/info-user.component';
import { FotoUserComponent } from '../components/foto-user/foto-user.component';
import { IDataUser } from 'src/app/core/models/IDataUser.model';
import { Observable } from 'rxjs';
import { AboutMeService } from 'src/app/core/services/about-me-service/about-me.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    InfoUserComponent,
    FotoUserComponent,
  ],
  templateUrl: './desktop-home.component.html',
  styleUrls: ['./desktop-home.component.less'],
})
export class DesktopHomeComponent implements OnInit {
  dataUser$! : Observable<IDataUser | null>;

  constructor(private aboutMeService: AboutMeService) {}

  ngOnInit(): void {
    this.dataUser$ = this.aboutMeService.aboutMe$;
  }
}