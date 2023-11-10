import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/Types/types';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-app-projects',
  templateUrl: './app-projects.component.html',
  styleUrls: ['./app-projects.component.css']
})
export class AppProjectsComponent implements OnInit {
  projects:IProject[]=[]


  constructor(private projectSvc:ProjectsService){

  }

  ngOnInit(): void {
     this.getProjects()
    
  }

  getProjects(){
    let data=this.projectSvc.getProjects().subscribe(
      res=>{this.projects=res
      console.log( "this is are my projects",this.projects)
      })
  }

}
