import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToFreelancerPage() {
    this.router.navigate(['/freelancer']);
  }

  navigateToEmployerPage() {
    this.router.navigate(['/employer']);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
