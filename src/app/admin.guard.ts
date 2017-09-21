import { LoginService } from './login/login.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private router: Router, private authService: LoginService) { }
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
  
      return this.authService.authInfo$
        .map(authInfo => authInfo.isAdmin())
        .take(1)
        .do(allowed => {
          if (!allowed) this.router.navigate(['/filmes']);
        });
    }
  
    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
  
      return this.authService.authInfo$
        .map(authInfo => authInfo.isLoggedIn())
        .take(1)
        .do(allowed => {
          if (!allowed) this.router.navigate(['/erro-nao-logado']);
        });
    }
  }
  