import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  private readonly router: Router = inject(Router);
  private authService = inject(AuthService);

  public canActivate(): Observable<boolean> {
    return this.authService.getAuthState().pipe(
      map((state) => {
        if (!state) {
          this.router.navigate(['/auth/login']);
          return false;
        }
        return true;
      })
    );
  }
}
