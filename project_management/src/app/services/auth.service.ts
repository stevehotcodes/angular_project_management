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

    console.log(token);
    

    return data
  }

}
