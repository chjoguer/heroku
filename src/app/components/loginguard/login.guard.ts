import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
    constructor(private router: Router, private service_login:LoginService ) { }

    canActivate(): boolean {
        if(this.service_login.getIsLogin()){
            this.router.navigate(['/'])
            return false;
        }
        return true;
    }

}

