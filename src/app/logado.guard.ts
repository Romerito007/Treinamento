import { Router } from '@angular/router';
import { LoginService } from 'app/login/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LogadoGuard implements CanActivate {

  constructor(private router: Router, private authService: LoginService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    return this.authService.authInfo$
      .map(authInfo => authInfo.isLoggedIn())
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
