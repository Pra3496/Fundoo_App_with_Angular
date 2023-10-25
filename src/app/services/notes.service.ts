import { Injectable } from '@angular/core';
import { HttpservicesService} from '../services/httpservices.service';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NotesService {
  authToken!:any;
  constructor(private httpservice: HttpservicesService) { 
    this.authToken = localStorage.getItem("token");
  }

  CreateNote(email:string, password:string, firstName:string, lastName:string)
  {
    let header = {
      header: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': this.authToken
      }),
    };

    let payload = {
      firstName: firstName,
      lastName: lastName,
      email:email,
      password:password
    }


    this.httpservice.postService("/Note",payload,false,header);

  }

  GetNotes()
  {
    let header = {
      header: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkZpcnN0QG1haWwuY29tIiwiVXNlcklEIjoiMTAiLCJuYmYiOjE2OTgyMzU4ODEsImV4cCI6MTY5ODIzNTk0MSwiaWF0IjoxNjk4MjM1ODgxfQ.Gw7ntsCQzXkSWbHwlErpuopWaWbVmI0OIPEz1w5VZig',

      }),
    };
    console.log(header.header);
    this.httpservice.getService("/Note",true,header).subscribe((response:any)=>{
      console.log(response)
    });

  }
}
