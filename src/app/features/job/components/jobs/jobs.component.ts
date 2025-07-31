import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { IJob } from 'src/app/core/models/IJob.model';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { ISkill } from 'src/app/core/models/ISkill.model';
import { ModalActionsButtonComponent } from 'src/app/shared/components/modal-actions-button/modal-actions-button.component';
import { JobFormComponent } from '../job-form/job-form.component';
import { JobDataService } from 'src/app/core/services/job-data-service/job-data.service';
import { combineLatest, map, Observable, take } from 'rxjs';
import { SkillDataService } from 'src/app/core/services/skill-data-service/skill-data.service';

@Component({
  selector: 'app-jobs',
  imports: [
    CommonModule,
    ModalComponent,
    JobFormComponent,
    ModalActionsButtonComponent,
    CardComponent,
  ],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.less',
})
export class JobsComponent implements OnInit {
  @Input() userLogged!: boolean;
  jobs$!: Observable<(IJob & { skillsDetails: ISkill[] })[]>;
  skillsNames: string[] = [];
  trabajoSeleccionado!: (IJob & { skillsDetails: ISkill[] });

  constructor(
    private jobDataService: JobDataService,
    private skillDataService: SkillDataService
  ) {}

  ngOnInit(): void {
    this.jobs$ = combineLatest([
      this.jobDataService.jobs$,
      this.skillDataService.skills$,
    ]).pipe(
      map(([jobs, skills]) =>
        jobs.map((j) => ({
          ...j,
          skillsDetails: skills.filter((h) => j.technologies.includes(h.id)),
        }))
      )
    );
  }

  getTechnologiesNamesById(tecn: number[]): string[] {
    let names: string[] = [];
    this.skillDataService.getByIds(tecn).subscribe((tecns) => {
      names = tecns.map((tecn) => tecn.name);
    });
    return names;
  }

  seleccionarTrabajo(job: (IJob & { skillsDetails: ISkill[] })) {
    this.trabajoSeleccionado = job;
  }

  eliminarTrabajo(id: number) {
    this.jobDataService.deleteJob(id);
  }

  editarTrabajo(job: IJob) {
    this.jobDataService.updateJob(job)
  }

  agregarTrabajo(job: IJob) {
    this.jobDataService.addJob(job)
  }
}
