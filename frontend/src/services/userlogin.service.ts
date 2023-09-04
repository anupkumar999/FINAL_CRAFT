import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {
  private baseUrl = 'http://localhost:8000'; // Replace with your server URL

  constructor(private http: HttpClient) {}

  // GET request example
  getUserData(): Observable<any> {
    const url = `${this.baseUrl}`;
    return this.http.get(url);
  }

  // POST request example
  postUserData(data: any): Observable<any> {
    const url = `${this.baseUrl}/`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(url, data);
  }
}
