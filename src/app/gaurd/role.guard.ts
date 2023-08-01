import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private auth: AuthService ) {

  }
  canActivate() {


    if (this.auth.isRole() == 'ADMIN' || this.auth.isRole() == 'EDITOR') {
          return true;
    }

    window.alert("pas authoriser")

    return false;

  }

}
