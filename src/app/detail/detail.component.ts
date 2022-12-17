import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() students: any;
  constructor() {}

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
}
