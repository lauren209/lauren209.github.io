import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() city: string;
  @Input() cityArray: string[];


  
  images: string[] = [
    "https://live.staticflickr.com/65535/49086308148_6faca16653_b.jpg",
        "https://live.staticflickr.com/65535/49086818656_280e99859c_b.jpg"
  ]


  constructor() { }

  ngOnInit() {
    
  }

  currentImage: string;
  i: number = 0;
  // images: string[];

  word: string = "";

  // 
  

  // cityImages(city: string){
  //   this.images.push("https://live.staticflickr.com/65535/49086308148_6faca16653_b.jpg");
  //   this.images.push("https://live.staticflickr.com/65535/49086818656_280e99859c_b.jpg");
  //   return this.images;
  // }

  forward(){
    this.currentImage = this.images[this.i];
    this.i++;
  }


  backward(){
    if(this.i != 0){
      this.currentImage = this.images[this.i];
      this.i--;
    }

  }

}
