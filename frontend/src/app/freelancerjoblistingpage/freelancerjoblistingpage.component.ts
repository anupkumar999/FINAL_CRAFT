import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobModel } from 'src/job.model';
import { JobService } from 'src/services/job.service';

@Component({
  selector: 'app-freelancerjoblistingpage',
  templateUrl: './freelancerjoblistingpage.component.html',
  styleUrls: ['./freelancerjoblistingpage.component.css']
})
export class FreelancerjoblistingpageComponent {
  jobAllInfo:JobModel[]=[];
  filteredJobs: JobModel[] = [];
  searchQuery: string = '';
  filteredExpeditionInfo: JobModel[] = [];

  constructor(
    private jobService: JobService,
    private router: Router
  ) {}

  ngOnInit() {
    this.jobService.getAllPostedJobs().subscribe((jobdata:any) => {
      this.jobAllInfo = jobdata;
      this.filteredExpeditionInfo = jobdata;

      console.log("current posted job : ",this.jobAllInfo)
    })
  }
  searchExpeditions() {
    // Convert this.searchQuery to a number if it's currently a string
    const minSalary = parseFloat(this.searchQuery);
  
    // Filter by title
    const titleFiltered = this.jobAllInfo.filter(filjobs =>
      filjobs.title.includes(this.searchQuery)
    );
  
    if (!isNaN(minSalary)) {
      // Filter by salary if a valid number
      this.filteredExpeditionInfo = this.jobAllInfo.filter(filjobs =>
        filjobs.salary >= minSalary
      );
  
      // If both title and salary filters are applied, find the intersection
      if (titleFiltered.length > 0) {
        this.filteredExpeditionInfo = this.filteredExpeditionInfo.filter(filjobs =>
          titleFiltered.some(titleFilteredJob => titleFilteredJob._id === filjobs._id)
        );
      }
    } else {
      // If not a valid number, use only the title filter
      this.filteredExpeditionInfo = titleFiltered;
    }
  }
  

  viewApplicants(job: any) {
    // Assuming you have a route named 'view-applicants/:jobId' configured
    this.router.navigate(['view-applicants', job.id]);
  }
}
