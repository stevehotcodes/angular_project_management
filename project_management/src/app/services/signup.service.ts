import { Injectable } from '@angular/core';
import { InewUserDetails } from 'src/Types/types';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor() { }

  async registerUser(newUserDetails:InewUserDetails){
      let response=await fetch("http://localhost:3000/user/new",{
        headers:{
          "Content-Type": "application/json"
        },
        method:"POST",
        body:JSON.stringify(newUserDetails)
  
      })

      let data=await response.json();
      console.log(data)

      return data



  }
}
