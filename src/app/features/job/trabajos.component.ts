import { Component, OnInit } from '@angular/core';
import { ProjectsComponent } from "./components/projects/projects.component";
import { JobsComponent } from "./components/jobs/jobs.component";
import { LoginService } from 'src/app/core/services/auth-service/login/login.service';

@Component({
  selector: 'app-trabajos',
  standalone: true,
  imports: [ProjectsComponent, JobsComponent],
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.less']
})
export class TrabajosComponent implements OnInit {
  isLogin!: boolean
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.isLogin = this.loginService.isLogin();
  }
}
