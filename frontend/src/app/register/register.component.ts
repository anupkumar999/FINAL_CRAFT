import { Component } from '@angular/core';
import { MyHttpService } from 'src/services/userlogin.service';
import { UserLogin } from 'src/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    password: '',
    role: 'freelancer' // Set a default role (e.g., 'freelancer')
  };
  // data: string[] = [
  //   'name',
  //   'email',
  //   'password',
  // ];
  userInfo: UserLogin[] =[]
  constructor(private userLogin:MyHttpService){}

  ngOnInit(): void{
  }
  onSubmit() {
    console.log('Registration form submitted:', this.user);
    this.userLogin.postUserData(this.user).subscribe(
      (response: any) => {
        console.log("Uploaded Successfully", response);
        alert("Registered Successfully");
      },
      (error: any) => {
        console.error(error);
      }
    );
  }  
}
