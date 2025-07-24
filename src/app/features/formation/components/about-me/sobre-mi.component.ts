import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IDataUser } from 'src/app/core/models/IDataUser.model';
import { AppDataService } from 'src/app/core/services/app-data-service/app-data.service';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.less'],
})
export class SobreMiComponent implements OnInit {
  data!: IDataUser;
  constructor(private router: Router, private appDataService: AppDataService) {}

  ngOnInit(): void {
    this.data = this.appDataService.getAboutMe();
  }

  irAContacto() {
    this.router.navigateByUrl('/desktop/contact');
  }
}
