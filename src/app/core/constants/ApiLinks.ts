import { environment } from 'src/environments/environment';

export class ApiLinks {
  public static readonly URL_API = `${environment.apiUrl}`;
  public static readonly APP_DATA = () => `${this.URL_API}/1/public`;

  public static readonly SKILLS = () => `${this.URL_API}/habilidades`;
  public static readonly SKILLS_ID = (skillsId: number) =>
    `${this.SKILLS()}/${skillsId}`;

  public static readonly JOBS = () => `${this.URL_API}/trabajos`;
  public static readonly JOBS_ID = (jobId: number) =>
    `${this.JOBS()}/${jobId}`;

  public static readonly PROJECTS = () => `${this.URL_API}/proyectos`;
  public static readonly PROJECTS_ID = (projectId: number) =>
    `${this.PROJECTS()}/${projectId}`;

  public static readonly FORMATIONS = () => `${this.URL_API}/formaciones`;
  public static readonly FORMATIONS_ID = (formationId: number) =>
    `${this.FORMATIONS()}/${formationId}`;
}
