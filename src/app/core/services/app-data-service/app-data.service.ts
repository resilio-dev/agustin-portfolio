import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'src/app/core/models/IUser.model';
import { BehaviorSubject } from 'rxjs';
import { DEFAULT_USER_DATA } from '../../constants/default-user.data';
import { ToastrService } from 'ngx-toastr';
import { ApiLinks } from '../../constants/ApiLinks';
import { FormationDataService } from '../formation-data-service/formation-data.service';
import { JobDataService } from '../job-data-service/job-data.service';
import { ProjectDataService } from '../project-data-service/project-data.service';
import { SkillDataService } from '../skill-data-service/skill-data.service';
import { AboutMeService } from '../about-me-service/about-me.service';

@Injectable({
  providedIn: 'root',
})
export class AppDataService {
  private appDataSubject = new BehaviorSubject<IUser | null>(null);
  appData$ = this.appDataSubject.asObservable();

  constructor(private http: HttpClient,
    private toastr: ToastrService,
    private formationDataService: FormationDataService,
    private jobDataService: JobDataService,
    private skillDataService: SkillDataService,
    private projectDataService: ProjectDataService,
    private aboutMeService: AboutMeService
  ) {}

  uploadData(): void {
    console.log('Connecting to server...');
    this.http.get<IUser>(ApiLinks.APP_DATA()).subscribe({
      next: (data: IUser) => {
        this.appDataSubject.next(data);
        this.formationDataService.setFormations(data.formations);
        this.jobDataService.setJobs(data.jobs);
        this.skillDataService.setSkills(data.skills);
        this.projectDataService.setProjects(data.projects);
        this.aboutMeService.setAboutMeData(data);
        /*this.toastr.success(
          'Estás viendo una vista en vivo de mi Portafolio web.',
          '',
          { timeOut: 2500 }
        );*/
        console.log('Connection susccessful');
      },
      error: (err: HttpErrorResponse) => {
        const data = DEFAULT_USER_DATA;
        this.appDataSubject.next(data);
        this.formationDataService.setFormations(data.formations);
        this.jobDataService.setJobs(data.jobs);
        this.skillDataService.setSkills(data.skills);
        this.projectDataService.setProjects(data.projects);
        this.aboutMeService.setAboutMeData(data);
        /*
        this.toastr.info(
          'Estas viendo una vista predeterminada de mi perfil.',
        );*/
        console.error('Error server connect.', err.message);
      },
    });
  }
}
