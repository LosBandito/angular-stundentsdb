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

  ngOnInit() {
    // Get the student object from local storage
    let students = JSON.parse(localStorage.getItem('students'));
    let index = students.findIndex(
      (user) =>
        user.name === this.student.name && user.surname === this.student.surname
    );
    this.student = students[index];
  }

  onSubmit() {
    // Find the student in the students array
    let students = JSON.parse(localStorage.getItem('students'));
    let index = students.findIndex(
      (user) =>
        user.name === this.student.name && user.surname === this.student.surname
    );

    // Update the student object in the students array
    students[index] = this.student;

    // Save the updated students array to local storage
    localStorage.setItem('students', JSON.stringify(students));
    this.isEditing = false;
  }
}
