import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Dna {
  private apiUrl = 'https://dna-mutation-detector-1.onrender.com';

  constructor(private http: HttpClient) {}

  checkMutation(dna: string[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/mutation`, { dna });
  }

  getStats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/stats`);
  }

  getList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/list`);
  }
}