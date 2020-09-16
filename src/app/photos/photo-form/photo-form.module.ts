import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VmessageModule }from '../../shared/vmessage/vmessage.module'
import { PhotoModule } from '../photo/photo.module';
import { ImediateClickModule } from '../../shared/directives/immediate/imediate-click.module'




@NgModule({
  declarations: [
    PhotoFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    VmessageModule,
    PhotoModule,
    ImediateClickModule



  ]
})
export class PhotoFormModule { }
