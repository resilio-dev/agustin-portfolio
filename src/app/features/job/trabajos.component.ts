import { Component } from '@angular/core';
import { ProjectsComponent } from "./components/projects/projects.component";
import { JobsComponent } from "./components/jobs/jobs.component";

@Component({
  selector: 'app-trabajos',
  standalone: true,
  imports: [ProjectsComponent, JobsComponent],
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.less']
})
export class TrabajosComponent {
}
