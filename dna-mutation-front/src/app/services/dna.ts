import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class dna {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  checkMutation(dna: string[]): Observable<any> {
    return this.http.post(`${this.baseUrl}/mutation`, { dna });
  }

  getStats(): Observable<any> {
    return this.http.get(`${this.baseUrl}/stats`);
  }

}
