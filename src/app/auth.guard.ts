import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private appComponent: AppComponent, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log('CanActivate called');
    if (this.appComponent.loggedin) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
