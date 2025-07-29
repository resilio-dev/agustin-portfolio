import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AppDataService } from '../app-data-service/app-data.service';
import { IFormation } from '../../models/IFormation.model';

@Injectable({
  providedIn: 'root'
})
export class FormationDataService {
formations$ :Observable<IFormation[]>;

  constructor(private appDataService: AppDataService) {
    this.formations$ = this.appDataService.appData$.pipe(
      map((data) => data?.formations ?? [])
    );
  }

  updateFormations(formations: IFormation[]) {
    const user = this.appDataService.getDataValue();
    if (user) {
      this.appDataService.setData({ ...user, formations: formations });
    }
  }

  updateFormationSkills(id: number, newIds: number[]) {
    const user = this.appDataService.getDataValue();
    if (!user) return;
    const formations = user.formations.map((p) =>
      p.id === id ? { ...p, technologies: newIds } : p
    );
    this.updateFormations(formations);
  }

  getByIds(ids: number[]): Observable<IFormation[]> {
    return this.formations$.pipe(
      map((formations) => formations.filter((f) => ids.includes(f.id)))
    );
  }
}
