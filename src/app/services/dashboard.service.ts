import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConstants } from '../constants/api-constants';

@Injectable({
  providedIn: 'root'
})
export class DashboardService{
  private http = inject(HttpClient);

  getDashboard(): Observable<any> {
    return this.http.get(ApiConstants.API_ENDPOINT + '/', { responseType: 'text' });
  }
}
