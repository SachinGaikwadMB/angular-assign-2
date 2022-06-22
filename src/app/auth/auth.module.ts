import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UnauthorizedPageComponent } from './unauthorized-page/unauthorized-page.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path : '',
    component : LoginComponent,
  },
  
  {
    path : 'unauthorized',
    component :UnauthorizedPageComponent
  },

 
  
];


@NgModule({
  declarations: [
    LoginComponent,
    UnauthorizedPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
