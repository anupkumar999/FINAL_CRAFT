import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FreelancerService {
  private baseUrl = 'http://localhost:8000/freelance'; // Replace with your API base URL

  constructor(private http: HttpClient) {}

  // POST: Create a new job
  postFreelancer(freelancerData: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, freelancerData);
  }

  // GET: Fetch all posted jobs
  getAllFreelancer(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl+'/job');
  }
}
