import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';

import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { NotfoundComponent } from './errors/notfound/notfound.component';
import { PhotoListResolver } from './photos/photo-list/photo-list-resolver';
import { SignInComponent } from './home/sign-in/sign-in.component';
import { SignUpComponent } from './home/sign-up/sign-up.component';
import { AuthGuard } from './core/auth/auth.guard'
import { RequiresAutenticationGuard } from './core/auth/requires-autentication.guard'
import { PhotoDetailComponent } from './photos/photo-detail/photo-detail.component';

const routes: Routes = [
    {
      path: '',
      component: SignInComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'signup',
      component: SignUpComponent,
    },
    { path: 'user/:userName',
      component: PhotoListComponent,
       resolve: {
         photos: PhotoListResolver
       }
    },
    {
      path: 'p/add', component: PhotoFormComponent,
      canActivate: [RequiresAutenticationGuard]
    },
    {
      path: 'p/:photoId',
      component: PhotoDetailComponent,
    },
    {
      path: '**',
      component: NotfoundComponent
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
