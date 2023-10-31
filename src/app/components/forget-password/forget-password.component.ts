import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar, MatSnackBarRef, MatSnackBarModule} from '@angular/material/snack-bar';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit{

  loginForm!: FormGroup;
  submitted = false; 

  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar,private _userService: UserService)
  {

  }

  ngOnInit() 
  {
      this.loginForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]]
      });
  }

      // convenience getter for easy access to form fields
      get f() { return this.loginForm.controls; }

      onSubmit() 
      {
          this.submitted = true;
  
          // stop here if form is invalid
          if (this.loginForm.invalid)
          {
              this._snackBar.open("Invalid Data","close");
              return;
          }

          this._userService.ForgetUser(this.loginForm.value.email);

            
         
      }

      onReset() 
      {
          this.submitted = false;
          this.loginForm.reset();
      }

}
