import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from './auth/services/auth.service';
import { map, tap, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.isLoggedIn().pipe(
      switchMap((response) => {
        const isAuthenticated = response.authenticated;
        const path = next.routeConfig?.path;

        if (isAuthenticated) {
          // If user is authenticated and trying to access login or register routes
          if (path === 'login' || path === 'register') {
            this.router.navigate(['/dashboard']);
            return of(false);
          }
          return of(true);
        } else {
          // If user is not authenticated and trying to access protected routes
          if (path !== 'login' && path !== 'register') {
            this.router.navigate(['/auth/login']);
            return of(false);
          }
          return of(true);
        }
      })
    );
  }
}
