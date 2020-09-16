import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VmessageModule } from '../shared/vmessage/vmessage.module';
import { BrowserModule } from '@angular/platform-browser';
import { SignUpComponent } from './sign-up/sign-up.component';




@NgModule({
  declarations: [
     SignInComponent,
    SignUpComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VmessageModule,
    RouterModule,
    BrowserModule

]
})
export class HomeModule { }
