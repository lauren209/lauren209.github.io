import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Continent } from 'src/app/continent';
import { ContinentService } from 'src/app/continent.service';



@Component({
  selector: 'app-continent-details',
  templateUrl: './continent-details.component.html',
  styleUrls: [ './continent-details.component.less' ]
})
export class ContinentDetailsComponent implements OnInit {
  continent: Continent;

  constructor(
    private route: ActivatedRoute,
    private continentService: ContinentService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getContinent();
  }

  getContinent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.continentService.getContinent(id)
      .subscribe(continent => this.continent = continent);
  }

  goBack(): void {
    this.location.back();
  }
}
