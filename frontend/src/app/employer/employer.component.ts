import { Component } from '@angular/core';
import { JobService } from 'src/services/job.service';
import { JobModel } from 'src/job.model';
import { MyHttpService } from 'src/services/userlogin.service';
import { UserLogin } from 'src/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css'],
})
export class EmployerComponent {
  fileSizeError: boolean = false;
  filepath: any;
  jobInfo:JobModel[]=[];

  newJob = {
    employername: '',
    employeremail: '',
    title: '',
    jobdescription: '',
    requirements: '',
    tags: '',
    companyname: '',
    contactinfo: '',
    document: '',
    salary:'',
  };

  jobdata: string[] = [
    'employername',
    'employeremail',
    'title',
    'jobdescription',
    'requirements',
    'tags',
    'companyname',
    'contactinfo',
    'document',
    'salary'
  ];

  postedJobs: any[] = [];

  constructor(
    private jobs: JobService,
    private jobService: JobService,
    private router: Router
  ) {}

  ngOnInit() {
  }
  logout() {
    this.router.navigate(['/']);
  }
  onFileChange(event: any) {
    this.filepath = event.target.files[0];
    if (this.filepath) {
      const maxSizeInBytes = 16 * 1024; // 16KB
      if (this.filepath.size > maxSizeInBytes) {
        alert('file size should be less then 16kb');
        this.fileSizeError = true;
        
        const fileInput = document.getElementById(
          'document'
        ) as HTMLInputElement;

        fileInput.value = '';
        this.newJob.document = '';
      } else {
        this.fileSizeError = false;
      }
    }
  }

  postJob() {
    // Call the service function to post a new job
    if (!this.fileSizeError) {
      // console.log('Posted Job with document', this.newJob);
      // this.newJob.employername=this.loggedUser
      this.jobService.postJob(this.newJob).subscribe(
        (response: any) => {
          console.log('Uploaded Successfully', response);

          this.jobs.getUserPostedJobs(this.newJob.employeremail).subscribe((jobdata:any) => {
            this.jobInfo = jobdata;
            console.log("current posted job : ",jobdata)
          })

          // Clear the form
          this.newJob.employername = '';
          this.newJob.employeremail = '';
          this.newJob.title = '';
          this.newJob.jobdescription = '';
          this.newJob.requirements = '';
          this.newJob.tags = '';
          this.newJob.companyname = '';
          this.newJob.contactinfo = '';
          this.newJob.document = '';
          this.newJob.salary = '';
        },
        (error: any) => {
          console.error(error);
        }
      );
    } 
  }
}
