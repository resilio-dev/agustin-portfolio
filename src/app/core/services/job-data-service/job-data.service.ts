import { Injectable } from '@angular/core';
import { IJob } from '../../models/IJob.model';
import { map, Observable } from 'rxjs';
import { AppDataService } from '../app-data-service/app-data.service';

@Injectable({
  providedIn: 'root'
})
export class JobDataService {
jobs$ :Observable<IJob[]>;

  constructor(private appDataService: AppDataService) {
    this.jobs$ = this.appDataService.appData$.pipe(
      map((data) => data?.jobs ?? [])
    );
  }

  updateJobs(jobs: IJob[]) {
    const user = this.appDataService.getDataValue();
    if (user) {
      this.appDataService.setData({ ...user, jobs: jobs });
    }
  }

  updateJobSkills(id: number, newIds: number[]) {
    const user = this.appDataService.getDataValue();
    if (!user) return;
    const jobs = user.jobs.map((p) =>
      p.id === id ? { ...p, technologies: newIds } : p
    );
    this.updateJobs(jobs);
  }

  getByIds(ids: number[]): Observable<IJob[]> {
    return this.jobs$.pipe(
      map((jobs) => jobs.filter((j) => ids.includes(j.id)))
    );
  }
}
