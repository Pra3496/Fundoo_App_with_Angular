import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpservicesService} from '../../../services/httpservices.service';
import { HttpHeaders } from '@angular/common/http';
import {MatSnackBar, MatSnackBarRef, MatSnackBarModule} from '@angular/material/snack-bar';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{

  registerForm!: FormGroup;
  submitted = false;   
  
  //payload: any = [];

  constructor(private formBuilder: FormBuilder,private _userService: UserService, private _snackBar: MatSnackBar) { }

  ngOnInit() 
  {
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required,Validators.minLength(6)],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required]
      
      });
  }

      // convenience getter for easy access to form fields
      get f() { return this.registerForm.controls; }

      onSubmit() 
      {
          this.submitted = true;
  
          if (this.registerForm.invalid) {
            this._snackBar.open('Invalid Data', 'close', {
                duration: 2000, 
              });
              return;
          }
          

          let header = {
            header: new HttpHeaders({
              'Content-Type' : 'application/json',
            }),
          };

          let payload = {
            firstName:this.registerForm.value.firstName,
            lastName:this.registerForm.value.lastName,
            email:this.registerForm.value.email,
            password:this.registerForm.value.password
          }

          this._userService.CreateUser(this.registerForm.value.firstName,this.registerForm.value.lastName,this.registerForm.value.email,this.registerForm.value.password);
          this.onReset();
      }
  
      onReset() 
      {
          this.submitted = false;
          this.registerForm.reset();
      }



}
