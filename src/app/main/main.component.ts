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

  ngOnInit() {}

  //modal for adding
  getData(): any {
    return localStorage.getItem('students');
  }
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
    this.addData({
      name: this.name,
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
    });
  }

  addData(student: student): void {
    const students: student[] = JSON.parse(
      localStorage.getItem('students') || '[]'
    );
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));
  }

  data = JSON.parse(localStorage.getItem('students') || '{}');

  displayStyle = 'none';
  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }

  //Deletion modal
  
  deleteData(name: string, surname: string): void {
    const students: student[] = JSON.parse(localStorage.getItem('students') || '[]');
    // find index of student with matching name and surname
    const index = students.findIndex(s => s.name === name && s.surname === surname);
    // remove student from array
    if (index !== -1) {
      students.splice(index, 1);
      localStorage.setItem('students', JSON.stringify(students));
    }
  }


  displayStyle1 = 'none';

  openPopup1() {
    this.displayStyle1 = 'block';
  }
  closePopup1() {
    this.displayStyle1 = 'none';
  }
  1;
}
