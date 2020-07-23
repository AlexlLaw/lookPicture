import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';

import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { NotfoundComponent } from './errors/notfound/notfound.component';
import { PhotoListResolver } from './photos/photo-list/photo-list-resolver';
import {SignInComponent} from './home/sign-in/sign-in.component';

const routes: Routes = [
    {
      path: '',
      component: SignInComponent
    },
    { path: 'user/:userName',
      component: PhotoListComponent, resolve: {
       photos: PhotoListResolver
       }
    },
    {
      path: 'p/add', component: PhotoFormComponent
    },
    {
      path: '**', component: NotfoundComponent
    }
  ];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
