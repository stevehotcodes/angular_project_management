import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface IProject{
  id:string,
  projectTitle:string,
  projectDescription:string,
  createdAt:string,
  projectDueDate:string,
  projectStatus:'unassigned'| 'assigned' |'in progress' |'completed'
  projectComments:string,
  userID:string
  fullname:string

}
export interface INewProject{
     projectTitle:string,
     projectDescription:string,
     projectDueDate:string 
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http:HttpClient) { }

  getProjects(){
    return this.http.get<IProject[]>('http://localhost:3000/projects/all',{
      headers:new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
        
    )
  }
  getCompletedProjects(){
    return this.http.get<IProject[]>('http://localhost:3000/projects/completed',{
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    })
  }

  createProject(projectDetails:INewProject){
    return this.http.post('http://localhost:3000/projects/new',projectDetails,{
      headers:{
        'Content-type':'application/json'
      }
    })
  }
  


}
