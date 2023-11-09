import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
export interface IUser{
  id:string
  fullname:string
  email:string
  role:string,
  datRegistered:string
  isAssigned:number
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  // animations:[
  //   triggers([])
  // ]

})
export class AdminDashboardComponent implements OnInit {
      users:IUser[]=[]
      constructor(private fetchUsersSvc:UsersService){
        this.getAllUsers()
      }
      ngOnInit(){
        
       }

      getAllUsers(){
        let data=  this.fetchUsersSvc.getEmployees().subscribe(res=>{
         
          console.log(res)
          this.users=res
        
        
          
        })
        
      }
   
   


}
