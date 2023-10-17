import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoginComponent } from './components/add-login/add-login.component';
import { RegistrationComponent } from './components/registration/registration/registration.component';

const routes: Routes = [
  {path:'login',component:AddLoginComponent},
  {path:'registration',component:RegistrationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
