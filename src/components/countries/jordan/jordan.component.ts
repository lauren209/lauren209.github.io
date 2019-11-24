import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jordan',
  templateUrl: './jordan.component.html',
  styleUrls: ['./jordan.component.css']
})
export class JordanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cities: string[] = [
    "https://live.staticflickr.com/65535/49086308148_6faca16653_b.jpg",
        "https://live.staticflickr.com/65535/49086818656_280e99859c_b.jpg"
  ];


  
}


// "https://live.staticflickr.com/65535/49086308148_6faca16653_b.jpg",
//         "https://live.staticflickr.com/65535/49086818656_280e99859c_b.jpg"