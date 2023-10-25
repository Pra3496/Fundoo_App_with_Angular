import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoginComponent } from './components/add-login/add-login.component';
import { RegistrationComponent } from './components/registration/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotesComponent } from './components/notes/notes.component';
import { GetAllnotesComponent } from './components/get-allnotes/get-allnotes.component';
const routes: Routes = [
  {path:'login',component:AddLoginComponent},
  {path:'registration',component:RegistrationComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    children:[
      {
        path:'getnote',component:GetAllnotesComponent
      }
    ]
  },
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
