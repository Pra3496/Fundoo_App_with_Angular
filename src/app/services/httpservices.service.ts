import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpservicesService {

  baseUrl = 'https://localhost:5001/api';
  constructor(private http: HttpClient)
  { 
    
  }


  
  postService(url: string, reqdata: any, token: boolean, httpOption: any = {}) {
    return this.http.post(
      this.baseUrl + url,
      reqdata,
      token && httpOption
    );
  }

  getService(url: string, token: boolean, httpOption: any = {}) {
    return this.http.get(
      this.baseUrl + url,
      token && httpOption
    );

  }

  getServiceUri(url: string, token: boolean, httpOption: any = {}) {
    return this.http.post(
      this.baseUrl + url,
      token && httpOption
    );
  }

  
  PatchServiceUri(url: string, reqdata: any, token: boolean, httpOption: any = {}) {
    return this.http.patch(
      this.baseUrl + url,
      reqdata,
      token && httpOption
    );
  }

  PutServiceUri(url: string, reqdata: any, token: boolean, httpOption: any = {}) {
    return this.http.put(
      this.baseUrl + url,
      reqdata,
      token && httpOption
    );
  }

}