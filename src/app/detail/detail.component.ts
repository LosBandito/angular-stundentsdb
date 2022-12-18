import { Component, Input, OnInit } from '@angular/core';
import { student } from '../main/main.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() students: any;
  constructor() {}
  student: student;
  isEditing = false;

  deleteUser() {
    // Zobere item
    let students = JSON.parse(localStorage.getItem('students'));

    //Najde index
    let index = students.findIndex(
      (user) =>
        user.name === this.students.name &&
        user.surname === this.students.surname
    );
    students.splice(index, 1);
    //vrati array
    localStorage.setItem('students', JSON.stringify(students));
  }

  ngOnInit() {}
  onSubmit() {
    // Get the list of students from local storage
    let studentsString = localStorage.getItem('students');
    let students = JSON.parse(studentsString);

    // Find the student object that we want to edit
    let student = students.find(
      (student) =>
        student.name === this.students.name &&
        student.surname === this.students.surname
    );

    console.log(this.students.name);
    // Update the name and surname of the student using the values from the form input fields
    student.name = this.students.name;
    student.surname = this.students.surname;
    student.class = this.students.classs;

    // Store the updated list of students back to local storage
    localStorage.setItem('students', JSON.stringify(students));
  }
}
