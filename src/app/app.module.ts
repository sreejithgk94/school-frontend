import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { SchoolRegistrationComponent } from './components/school-registration/school-registration.component';
import { StaffRegistrationComponent } from './components/staff-registration/staff-registration.component';
import { ParentsRegistrationComponent } from './components/parents-registration/parents-registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, 
  MatTableModule, 
  MatPaginatorModule,
  MatSortModule,
  MatSelectModule,
  MatDatepickerModule, 
  MatNativeDateModule } 
from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgetPasswordComponent,
    SchoolRegistrationComponent,
    StaffRegistrationComponent,
    ParentsRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule, 
    MatTableModule, 
    MatPaginatorModule, 
    MatSortModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
