import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'src/app/core/models/IUser.model';
import { BehaviorSubject } from 'rxjs';
import { IDataUser } from '../../models/IDataUser.model';
import { DEFAULT_USER_DATA } from '../../constants/default-user.data';
import { ToastrService } from 'ngx-toastr';
import { ApiLinks } from '../../constants/ApiLinks';

@Injectable({
  providedIn: 'root',
})
export class AppDataService {
  private appDataSubject = new BehaviorSubject<IUser | null>(null);
  readonly appData$ = this.appDataSubject.asObservable();

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  uploadData(): void {
    console.log('Connecting to server...');
    this.http.get<IUser>(ApiLinks.APP_DATA()).subscribe({
      next: (data: IUser) => {
        this.appDataSubject.next(data);
        this.toastr.success(
          'You are seeing a live view of my profile.',
          'Successful connection',
          { timeOut: 5000 }
        );
        console.log('Connection susccessful');
      },
      error: (err: HttpErrorResponse) => {
        this.appDataSubject.next(DEFAULT_USER_DATA);
        this.toastr.warning(
          'You are seeing a default view of my profile.',
          "Oh, it looks like we can't connect to the server right now.",
          { timeOut: 10000 }
        );
        console.error('Error server connect.', err.error.message);
      },
    });
  }
  
  getAboutMe(): IDataUser {
    const user = this.appDataSubject.value;
    return {
      name: user?.name || '',
      lastName: user?.lastName || '',
      age: user?.age || 27,
      description: user?.description || '',
      title: user?.title || 'Web Developer',
      mainPhrase: user?.mainPhrase || '',
      secondaryPhrase: user?.secondaryPhrase || '',
      email: user?.email || '',
      urlImg: user?.urlImg || '#',
      urlCV: user?.urlCV || '#',
      yearsXP: user?.yearsXP || 3,
    };
  }

  getDataValue(): IUser | null {
    return this.appDataSubject.value;
  }

  setData(user: IUser) {
    this.appDataSubject.next(user);
  }
}
