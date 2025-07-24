import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppDataService } from './core/services/app-data-service/app-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  constructor(private appDataService: AppDataService) {
    this.appDataService.uploadData();
  }
}
