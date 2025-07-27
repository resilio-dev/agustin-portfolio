import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  enviarMensaje(data: { name: string; email: string; message: string }) {
    return this.http.post<{message: string}>(`${environment.apiUrl}/contact`, data);
  }
}
