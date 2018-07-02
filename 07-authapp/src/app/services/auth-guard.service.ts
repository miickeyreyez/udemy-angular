import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth:AuthService) { }

  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot) {
    if(this.auth.isAuthenticated()){
      return true;
    } else {
      return false;
    }
  }

}
