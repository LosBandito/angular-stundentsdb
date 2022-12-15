import { Component, VERSION } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}

  loggedin = true;
  loggedname = 'Jano333';

  loginstatus = '';

  //Register
  public email: string;
  public password: string;

  public onSubmit(): void {
    console.log(this.email);
    console.log(this.password);
  }

  //Login tests
  login() {
    if (this.loggedin == true) {
      this.router.navigate(['main']);
    } else {
      this.router.navigate(['']);
    }
  }

  //Logou button
  logout() {
    this.loggedin = false;
    this.loggedname = 'You are not currently logged in';
    this.router.navigate(['']);
  }

  //ngOnInit() {

  //if (this.loggedin= false){
  // this.loginstatus="You are not logged in"
  //}
  //  else if(this.loggedin=true){
  //  this.loginstatus="You are logged as:"
  //}
  //}

  //Modal
  displayStyle = 'none';
  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }
}
