import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private baseUrl = 'http://localhost:8000/job'; // Replace with your API base URL

  constructor(private http: HttpClient) {}

  // POST: Create a new job
  postJob(jobData: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, jobData);
  }

  // GET: Fetch all posted jobs
  getAllPostedJobs(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl+'/job');
  }

  getUserPostedJobs(employeremail:any): Observable<any[]> {
    const url = `${this.baseUrl}/job/${employeremail}`;
    return this.http.get<any[]>(url);
  }
}
