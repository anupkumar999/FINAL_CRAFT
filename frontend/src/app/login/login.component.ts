import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyHttpService } from 'src/services/userlogin.service';
import { UserLogin } from 'src/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  user = {
    email: '',
    password: ''
  };

  ifWrong: boolean = false;
  data: string[] = [
    'name',
    'email',
    'password',
    'role'
  ];
  userInfo: UserLogin[] = [];

  constructor(private userLogin: MyHttpService, private router: Router) {}

  ngOnInit(): void {
    this.userLogin.getUserData().subscribe((data: any) => {
      console.log(data);
      this.userInfo = data;
    });
  }

  onSubmit() {
    // Validate email and password
    if (!this.validateEmail(this.user.email) || this.user.password.length < 6) {
      alert('Invalid email or password.');
      return;
    }

    // Check if the user exists and their role
    for (const element of this.userInfo) {
      if (element.email === this.user.email && element.password === this.user.password) {
        if (element.role === 'employer') {
          this.router.navigate(['/employer'], { state: { element } });
        } else {
          this.router.navigate(['/freelancer'], { state: { element } });
        }
        this.ifWrong = true;
      }
    }

    // If no matching user found, show an error
    if (!this.ifWrong) {
      alert('Wrong email or password.');
    }
  }

  // Validate email format
  private validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }
}
