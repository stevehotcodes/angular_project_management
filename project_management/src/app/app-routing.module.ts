import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppProjectsComponent } from './components/app-projects/app-projects.component';
import { CompletedProjectsComponent } from './components/completed-projects/completed-projects.component';
import { AddProjectComponent } from './components/add-project/add-project.component';

const routes: Routes = [
  {path:"",component:LandingpageComponent},
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"admin",component:AdminDashboardComponent},
  {path:"user-dashboard",component:UserDashboardComponent},
  {path:"projects",component:AppProjectsComponent},
  {path:"completed-admin-projects",component:CompletedProjectsComponent},
  {path:"addproject",component:AddProjectComponent},
  
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
