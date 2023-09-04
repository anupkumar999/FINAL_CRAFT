import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FreelancerComponent } from './freelancer/freelancer.component';
import { EmployerComponent } from './employer/employer.component';
import { FreelanceruserprofileComponent } from './freelanceruserprofile/freelanceruserprofile.component';
import { FreelancerjoblistingpageComponent } from './freelancerjoblistingpage/freelancerjoblistingpage.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { HomeComponent } from './home/home.component';
// import { FreelancerComponent } from './freelancer/freelancer.component';
// import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
    // { path: '', component: HomeComponent },
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'freelancer', component: FreelancerComponent },
    { path: 'employer', component: EmployerComponent },
    {path:'freelanceuserprofile',component:FreelanceruserprofileComponent},
    {path:'freelancerjoblistingpage',component:FreelancerjoblistingpageComponent}
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule {}
