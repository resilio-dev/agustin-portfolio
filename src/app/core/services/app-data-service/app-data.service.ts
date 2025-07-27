import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'src/app/core/models/IUser.model';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISkill } from '../../models/ISkill.model';
import { IJob } from '../../models/IJob.model';
import { IProject } from '../../models/IProject.model';
import { IFormation } from '../../models/IFormation.model';
import { IDataUser } from '../../models/IDataUser.model';
import { DEFAULT_USER_DATA } from '../../constants/default-user.data';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AppDataService {
  private url: string = environment.apiUrl;
  private appDataSubject = new BehaviorSubject<IUser>(DEFAULT_USER_DATA);
  readonly appData$ = this.appDataSubject.asObservable();

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  uploadData(): void {
    this.http.get<IUser>(`${this.url}/usuarios/1`).subscribe({
      next: (data: IUser) => this.appDataSubject.next(data),
      error: (err: HttpErrorResponse) => {
        console.error(
          'Error obtaining server data: ',
          err.error.message
        );
        this.toastr.warning(
          'You are seeing a default view of my profile.', "Oh, it looks like we can't connect to the server right now.", {timeOut: 10000}
        );
      },
    });
  }

  getSkills(): ISkill[] {
    return this.appDataSubject.value?.skills || [];
  }
  getJobs(): IJob[] {
    return this.appDataSubject.value?.jobs || [];
  }
  getProjects(): IProject[] {
    return this.appDataSubject.value?.projects || [];
  }
  getFormations(): IFormation[] {
    return this.appDataSubject.value?.formations || [];
  }

  getAboutMe(): IDataUser {
    const user = this.appDataSubject.value;
    return {
      name: user?.name || '',
      lastName: user?.lastName || '',
      age: user?.age || 27,
      description: user?.description || '',
      title: user?.title || '',
      mainPhrase: user?.mainPhrase || '',
      secondaryPhrase: user?.secondaryPhrase || '',
      email: user?.email || '',
      urlImg: user?.urlImg || '',
      urlCV: user?.urlCV || '',
      yearsXP: user?.yearsXP || 3,
    };
  }
}
