import { Injectable } from '@angular/core';
import { HttpservicesService} from '../services/httpservices.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpservice: HttpservicesService) { }

  CreateUser(email:string, password:string, firstName:string, lastName:string)
  {
    let header = {
      header: new HttpHeaders({
        'Content-Type' : 'application/json',
      }),
    };

    let payload = {
      firstName: firstName,
      lastName: lastName,
      email:email,
      password:password
    }


    this.httpservice.postService("/User/register",payload,false,header);

  }

  LoginUser(email:string, password:string)
  {
    let header = {
      header: new HttpHeaders({
        'Content-Type' : 'application/json',
      }),
    };

    let payload = {
      email:email,
      password:password
    }


    this.httpservice.postService("/User/login",payload,false,header).subscribe((response:any)=>{
      console.log(response.data.token),
      localStorage.setItem("token",response.data.token);
    });

  }


}
