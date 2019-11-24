import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  country: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.country = this.route.snapshot.paramMap.get('name');
  }


}
