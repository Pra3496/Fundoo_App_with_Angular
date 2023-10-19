import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar, MatSnackBarRef, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-login',
  templateUrl: './add-login.component.html',
  styleUrls: ['./add-login.component.scss']
})
export class AddLoginComponent implements OnInit{
  registerForm!: FormGroup;
  submitted = false;      

  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit() 
  {
      this.registerForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

      // convenience getter for easy access to form fields
      get f() { return this.registerForm.controls; }

      onSubmit() 
      {
          this.submitted = true;
  
          // stop here if form is invalid
          if (this.registerForm.invalid)
          {
              this._snackBar.open("Invalid Data","close");
              return;
          }
  
          // display form values on success
          alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
      }
  
      onReset() 
      {
          this.submitted = false;
          this.registerForm.reset();
      }

}
