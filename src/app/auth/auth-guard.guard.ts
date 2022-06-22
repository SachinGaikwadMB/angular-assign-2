import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';
import { LoginServiceService } from './login-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private loginServeice : LoginServiceService) {}
   canActivate()
   {
    return this.loginServeice.authenticateUser();
  }
  
}
