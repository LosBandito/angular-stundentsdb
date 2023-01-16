import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  lastedit: Date;
};

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  displayStyle = 'none';
  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }

  //modal for adding

  lastEditDate: Date;

  getData(): any {
    if (
      !this.name ||
      !this.surname ||
      !this.classs ||
      !this.age ||
      !this.dob ||
      !this.gender ||
      !this.specialization ||
      !this.average ||
      !this.awards
    ) {
      alert('All fields are mandatory!');
      return;
    }
    this.closePopup();
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
  lastedit: Date;

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
      lastedit: (this.lastEditDate = new Date()),
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

  //Detail page

  selectedStudent = null;

  selectStudent(student) {
    this.selectedStudent = student;
  }
  //Deletion modal

  deleteData(name: string, surname: string): void {
    const students: student[] = JSON.parse(
      localStorage.getItem('students') || '[]'
    );

    const index = students.findIndex(
      (s) => s.name === name && s.surname === surname
    );
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
