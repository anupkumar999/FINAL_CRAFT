import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-freelancer',
  templateUrl: './freelancer.component.html',
  styleUrls: ['./freelancer.component.css']
})
export class FreelancerComponent {
  constructor(private router: Router) {}
  user: any = {
    skills: '',
    gitProfile: '',
    projects: []
  };

  onSubmit() {
    // Handle form submission (e.g., send data to the server)
    console.log(this.user);
  }

  logout() {
    this.router.navigate(['/']);
  }
}

