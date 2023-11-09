import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IuserLogin } from 'src/Types/types';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login!:FormGroup

  constructor(private fb :FormBuilder, private logInSvc:AuthService){
    this.login=this.fb.group({
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required]]
    })
  }

   logIn(){
    let userCredentials:IuserLogin=this.login.value;
    this.logInSvc.login(userCredentials)
  }
  async userAuthentication(){
    let respons
  }
  





}
