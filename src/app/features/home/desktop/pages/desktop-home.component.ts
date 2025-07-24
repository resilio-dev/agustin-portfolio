import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/models/IUser.model';
import { InfoUserComponent } from '../components/info-user/info-user.component';
import { FotoUserComponent } from '../components/foto-user/foto-user.component';
import { AppDataService } from 'src/app/core/services/app-data-service/app-data.service';
import { IDataUser } from 'src/app/core/models/IDataUser.model';
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
  data! :IDataUser;

  constructor(private appDataService: AppDataService) {}

  ngOnInit(): void {
    this.data = this.appDataService.getAboutMe();
  }
}