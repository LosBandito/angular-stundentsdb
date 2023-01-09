import { Component } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

export type users = {
  email: string;
  password: string;
};

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}
  users = [{ username: 'Admin', password: 'admin' }];

  loggedin = false;

  loginstatus = '';
  public loggedname = 'You are not currently logged in';
  //Register
  public email: string;
  public password: string;

  public onSubmit(): void {
    localStorage.setItem(
      'users',
      JSON.stringify({ email: this.email, password: this.password })
    );
  }

  //Login tests
  login() {
    const user = this.users.find(
      (u) => u.username === this.email && u.password === this.password
    );
    if (user) {
      this.loggedin = true;
      this.loggedname = 'You are logged in as Admin';
      this.router.navigate(['main']);
    }
  }

  //Logou button
  logout() {
    this.loggedin = false;
    this.loggedname = 'You are not currently logged in';
    this.router.navigate(['']);
  }

  //Modal
  displayStyle = 'none';
  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }
}
