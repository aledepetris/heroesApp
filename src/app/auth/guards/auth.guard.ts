import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor( private authService: AuthService,
               private router: Router ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      // if (this.authService.auth.id) {
      //   return true;
      // }

      // console.log('bloqueado por Authguard - CanActivate')
      // return false;

      return this.authService.verificarAutenticacion()
                .pipe(
                  tap( estaAutenicado => {
                    if (!estaAutenicado) {
                      this.router.navigate(['./auth/login']);
                    }
                  })
                );

  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

      // if (this.authService.auth.id) {
      //   return true;
      // }

      // console.log('bloqueado por Authguard - CanLoad')
      // return false;

      return this.authService.verificarAutenticacion()
      .pipe(
        tap( estaAutenicado => {
          if (!estaAutenicado) {
            this.router.navigate(['./auth/login']);
          }
        })
      );
  }

}
