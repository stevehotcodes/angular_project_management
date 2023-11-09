import { Injectable } from '@angular/core';
import { IuserLogin } from 'src/Types/types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  async login(userLogins: IuserLogin){
    let response = await fetch('http://localhost:3000/user/login', {
      headers:{
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(userLogins)
    })

    const data = await response.json()
    let token = data.token
    localStorage.setItem('token', token)

    console.log( "this token ",data);
    
    
    return data
  }

  async verifyToken (){
    let storedToken=localStorage.getItem('token') as string
      const response=await fetch("http://localhost:3000/user/checkuserdetails",{
        headers:{
          "Accept":"application/json",
          "Content-Type":"application/json",
          "token":storedToken
        },
        method:"GET",
      })
      let data =await response.json()
      return data
  }





}
