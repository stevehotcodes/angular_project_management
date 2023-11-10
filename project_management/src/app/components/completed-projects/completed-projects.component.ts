import { Component } from '@angular/core';
import { IProject } from 'src/Types/types';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-completed-projects',
  templateUrl: './completed-projects.component.html',
  styleUrls: ['./completed-projects.component.css']
})
export class CompletedProjectsComponent {
     completedProjects:IProject[]=[]

    constructor(private projectSvc:ProjectsService){
      this.getCompletedProjects()
    }

    getCompletedProjects(){
        let data=this.projectSvc.getCompletedProjects().subscribe(

          res=>{
             this.completedProjects=res
             console.log(res)

          }
        )
    }



    }
