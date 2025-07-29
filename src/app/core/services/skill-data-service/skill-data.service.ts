import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ISkill } from '../../models/ISkill.model';
import { AppDataService } from '../app-data-service/app-data.service';

@Injectable({ providedIn: 'root' })
export class SkillDataService{
  skills$ :Observable<ISkill[]>;

  constructor(private appDataService: AppDataService) {
    this.skills$ = this.appDataService.appData$.pipe(map(data => data?.skills ?? []));
  }

  getByIds(ids: number[]) :Observable<ISkill[]>{
    return this.skills$.pipe(map(skills => skills.filter(sk => ids.includes(sk.id))))
  }
}
