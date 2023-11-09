import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { InewUserDetails } from 'src/Types/types';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

   signUpForm!:FormGroup

  constructor(public fb:FormBuilder ,public signUpSvc:SignupService,public router:Router){
    this.signUpForm=this.fb.group({
      fullname:  ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],

    })
  }

  
  createUser(){
    console.log(this.signUpForm.value)
    let details:InewUserDetails=this.signUpForm.value
    this.signUpSvc.registerUser(details)
    this.router.navigate(["/login"]);
  }
  

    
       

}


