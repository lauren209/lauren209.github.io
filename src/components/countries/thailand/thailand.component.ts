import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thailand',
  templateUrl: './thailand.component.html',
  styleUrls: ['./thailand.component.css']
})
export class ThailandComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  gpImages: string[] = [
    "https://live.staticflickr.com/65535/49087032407_d030e1ce52_b.jpg"
  ];


}
