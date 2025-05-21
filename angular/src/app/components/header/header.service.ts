import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private apiUrl = `${environment.HEADER}`;

  constructor(private http: HttpClient) { }

  getHeader() {
    return this.http.get(this.apiUrl);
  }
}
