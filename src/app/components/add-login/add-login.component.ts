import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar, MatSnackBarRef, MatSnackBarModule} from '@angular/material/snack-bar';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-add-login',
  templateUrl: './add-login.component.html',
  styleUrls: ['./add-login.component.scss']
})
export class AddLoginComponent implements OnInit{
  loginForm!: FormGroup;
  submitted = false;      

  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar,private _userService: UserService) { }

  ngOnInit() 
  {
      this.loginForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

      // convenience getter for easy access to form fields
      get f() { return this.loginForm.controls; }

      onSubmit() 
      {
          this.submitted = true;
          localStorage.clear();
          // stop here if form is invalid
          if (this.loginForm.invalid)
          {
              this._snackBar.open("Invalid Data","close");
              return;
          }

          this._userService.LoginUser(this.loginForm.value.email,this.loginForm.value.password).subscribe((response:any)=>{
            console.log(response.data.token),
            localStorage.setItem("token",response.data.token),
            window.location.href = "/dashboard";
            
          }); 
      }

      onReset() 
      {
          this.submitted = false;
          this.loginForm.reset();
      }

      
  

}
