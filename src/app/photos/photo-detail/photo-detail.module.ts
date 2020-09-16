import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { PhotoDetailComponent } from '../photo-detail/photo-detail.component'
import { VmessageModule } from 'src/app/shared/vmessage/vmessage.module';
import { PhotoModule } from '../photo/photo.module';



@NgModule({
  declarations: [
    PhotoDetailComponent,
     PhotoCommentsComponent
    ],
  exports: [
    PhotoDetailComponent,
    PhotoCommentsComponent
  ],
  imports: [
    CommonModule,
     PhotoModule,
     RouterModule,
     ReactiveFormsModule,
     VmessageModule,
     FormsModule
    ]
})
export class PhotoDetailModule { }
