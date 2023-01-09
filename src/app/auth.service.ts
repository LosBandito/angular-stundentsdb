import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedin = false;
  constructor() {}
  isAuthenticated() {
    return this.loggedin;
  }
}
