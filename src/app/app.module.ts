import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddLoginComponent } from './components/add-login/add-login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { RegistrationComponent } from './components/registration/registration/registration.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { NgIf } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { NgFor } from '@angular/common';
import { NotesComponent } from './components/notes/notes.component';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { GetAllnotesComponent } from './components/get-allnotes/get-allnotes.component';
import { DisplaynotesComponent } from './components/displaynotes/displaynotes.component';
import { IconComponent } from './components/icon/icon.component';
import { EditNoteComponent } from './components/edit-note/edit-note.component';
import {MatDialogModule} from '@angular/material/dialog';
import { GetArchiveComponent } from './components/get-archive/get-archive.component';
import { GetTrashComponent } from './components/get-trash/get-trash.component';
import { ColorpickerComponent } from './components/colorpicker/colorpicker.component';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    AddLoginComponent,
    RegistrationComponent,
    ForgetPasswordComponent,
    NotesComponent,
    GetAllnotesComponent,
    DisplaynotesComponent,
    IconComponent,
    EditNoteComponent,
    DashboardComponent,
    GetArchiveComponent,
    GetTrashComponent,
    ColorpickerComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule,
    NgIf,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    NgFor,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
