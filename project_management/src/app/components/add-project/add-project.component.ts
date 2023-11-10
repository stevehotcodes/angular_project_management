import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { INewProject, ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  formProject!:FormGroup

  constructor(private fb:FormBuilder ,private projectSvc:ProjectsService,private router:Router){
    this.formProject=this.fb.group({
      projectTitle:["",[Validators.required]],
      projectDescription:["",[Validators.required]],
      projectDueDate:["",[Validators.required]]

    })
    
  }
  createProject(){
    console.log(this.formProject.value)
    let details:INewProject=this.formProject.value
     this.projectSvc.createProject(details).subscribe(
      res=>{
        console.log(res)
        this.router.navigate(["/admin"])
      }
    )
     
  }
}
