import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mani',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class AppComponent implements OnInit {

  constructor(private papa: Papa) {}

  ngOnInit() {
    };

    this.papa.parse(this.url, options);
  }