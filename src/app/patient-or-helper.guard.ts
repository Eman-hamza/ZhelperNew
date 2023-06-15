import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './Services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class patientOrHelperGuard implements CanActivate {
  constructor(private auth:AuthService)
  {

  }
  canActivate()
  {
      if(this.auth.gettokenRole()=="isHelper"){
        return true;
      }
      else{
        return false;
      }
    }
  }