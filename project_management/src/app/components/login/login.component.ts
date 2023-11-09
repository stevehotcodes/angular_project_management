import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IuserLogin } from 'src/Types/types';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login!:FormGroup
  loggedIn:boolean= false
  userCredentials!:IuserLogin

  constructor(private fb :FormBuilder, private logInSvc:AuthService, private router:Router){
    this.login=this.fb.group({
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required]]
    })
  }
 

  //  logIn(){
  
  //   this.logInSvc.login(userCredentials)
  // }
  async userAuthentication(){
    
    this.userCredentials =this.login.value;
     let token = await this.logInSvc.login(this.userCredentials) 
     console.log( "this is my response", token)
     
    let verificationUser=await this.logInSvc.verifyToken()
       if(verificationUser.info.role==="admin"){
         this.router.navigate(["/admin"])
       }
       else if(verificationUser.info.role==="employees"){
        this.router.navigate(["/user-dashboard"])
      }
     
    
  }
  





}
