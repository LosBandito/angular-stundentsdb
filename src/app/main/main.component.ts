import { Component, OnInit } from '@angular/core';
export type student = {
  name: string;
  surname: string;
  classs: string;
  age: string;
  dob: string;
  gender: string;
  specialization: string;
  average: string;
  disabled: boolean;
  awards: string;
  lastedit: string;
};

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor() {}
  student: any[];
  //modal for adding

  name: string;
  surname: string;
  classs: string;
  age: string;
  dob: string;
  gender: string;
  specialization: string;
  average: string;
  disabled: boolean;
  awards: string;
  lastedit: string;

  onSubmit() {
    const student = {
      name: this.surname,
      surname: this.surname,
      classs: this.classs,
      age: this.age,
      dob: this.dob,
      gender: this.gender,
      specialization: this.specialization,
      average: this.average,
      disabled: this.disabled,
      awards: this.awards,
      lastedit: this.lastedit,
    };

    localStorage.setItem('student', JSON.stringify(student));
  }

  ngOnInit() {
    this.student = JSON.parse(localStorage.getItem('student'));
  }

  displayStyle = 'none';
  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }
}
