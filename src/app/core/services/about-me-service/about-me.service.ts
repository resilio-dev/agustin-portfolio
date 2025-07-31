import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IDataUser } from '../../models/IDataUser.model';
import { IUser } from '../../models/IUser.model';

@Injectable({
  providedIn: 'root',
})
export class AboutMeService {
  aboutMeSubject = new BehaviorSubject<IDataUser | null>(null);
  aboutMe$ = this.aboutMeSubject.asObservable();

  constructor() {}

  setAboutMeData(dataUser: IUser) {
    this.aboutMeSubject.next(this.parseDataUser(dataUser));
  }

  private parseDataUser(dataUser: IUser): IDataUser {
      return {
        name: dataUser?.name || '',
        lastName: dataUser?.lastName || '',
        age: dataUser?.age || 27,
        description: dataUser?.description || '',
        title: dataUser?.title || 'Web Developer',
        mainPhrase: dataUser?.mainPhrase || '',
        secondaryPhrase: dataUser?.secondaryPhrase || '',
        email: dataUser?.email || '',
        urlImg: dataUser?.urlImg || '#',
        urlCV: dataUser?.urlCV || '#',
        yearsXP: dataUser?.yearsXP || 3,
      };
  }
}
