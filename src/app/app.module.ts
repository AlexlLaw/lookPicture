import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';
import { AppRoutingModule } from './app-routing.module';
import {ErrorsModule} from './errors/errors.module';
import { DarkenOnHoverDirective } from './shared/directives/darken-on-hover/darken-on-hover.directive';
import { SignInComponent } from './home/sign-in/sign-in.component';
import {ReactiveFormsModule} from '@angular/forms';
import { VmessageComponent } from './shared/vmessage/vmessage.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    VmessageComponent
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    AppRoutingModule,
    ErrorsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
