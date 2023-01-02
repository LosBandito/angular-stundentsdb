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
    let studentsString = localStorage.getItem('students');
    let students = JSON.parse(studentsString);
    let index = students.findIndex(
      (student) =>
        student.name === this.students.name &&
        student.surname === this.students.surname
    );

    students[index] = this.students;
    students[index].name = this.students.name;
    students[index].surname = this.students.surname;
    students[index].lastedit = new Date();

    localStorage.setItem('students', JSON.stringify(students));
  }
}
