import { environment } from 'src/environments/environment';

export class UsuarioApiLinks {
  public static readonly USERS = `${environment.apiUrl}/users`;
  public static readonly USERS_ID = (id: number) => `${this.USERS}/${id}`;
  public static readonly SKILLS = (id: number) => `${this.USERS_ID(id)}/skills`;
  public static readonly SKILLS_ID = (userId: number, skillsId: number) =>
    `${this.SKILLS(userId)}/${skillsId}`;
}
