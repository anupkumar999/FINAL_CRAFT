import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { freelancerModel } from 'src/freelancer.model';
import { FreelancerService } from 'src/services/freelancer.service';

@Component({
  selector: 'app-freelanceruserprofile',
  templateUrl: './freelanceruserprofile.component.html',
  styleUrls: ['./freelanceruserprofile.component.css']
})
export class FreelanceruserprofileComponent {
  user = {
    name: '', // User's name
    contact: '', // User's contact information
    skills: [], // An array to store selected skills
    gitProfile: '' // GitHub profile URL
  };

  githubProjects: any[] = [];
  constructor(private freelancer:FreelancerService,private http: HttpClient) {}

  onSubmit() {

    console.log(this.user.name);
    console.log(this.user.contact);

    console.log(this.user.skills);

    if (this.user.gitProfile) {
      const githubApiUrl = `https://api.github.com/users/${this.user.gitProfile}/repos`;
      this.http.get<any[]>(githubApiUrl).subscribe((projects: any[]) => {
        this.githubProjects = projects;
        console.log('GitHub Projects:', this.githubProjects);
      });
  }


//post
console.log('Uploaded freelancer data is :', this.user);
    this.freelancer.postFreelancer(this.user).subscribe(
      (response: any) => {
        console.log("Uploaded Successfully", response);
        alert("Uploaded Successfully");
      },
      (error: any) => {
        console.error(error);
      }
    );
}
}