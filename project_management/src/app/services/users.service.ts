import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface IUser{
  id:string
  fullname:string
  email:string
  role:string,
  datRegistered:string
  isAssigned:number
}

@Injectable({
  providedIn: 'root'
})





export class UsersService {

  constructor(private http:HttpClient) { }

//  async fetchUsers(){
//       const response=await fetch('http://localhost:3000/user/all',{
//             headers:{
//                 'Accept': 'application/json',
//                 'Content-type': 'application/json'
//             },
//             method:'GET',           
//         })
//       let fetchedData:IUser=await response.json();
//       return fetchedData
//  }

 getEmployees(){
  // let token = localStorage.getItem('token') as string
  return this.http.get<IUser[]>('http://localhost:3000/user/all', {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      // 'token': token
    })
  })


}
}
