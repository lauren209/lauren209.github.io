import { Component, OnInit } from '@angular/core';
import { Continent } from 'src/app/continent';
import { ContinentService } from 'src/app/continent.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.less']
})
export class DestinationsComponent implements OnInit {

  continents: Continent[] = [];

  constructor(private continentService: ContinentService) { }

  ngOnInit() {
    this.getContinents();
  }

  getContinents(): void {
    this.continentService.getContinents()
      .subscribe(continents => this.continents = continents.slice(0, 7));
  }

}
