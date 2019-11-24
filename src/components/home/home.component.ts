import { Component, OnInit } from '@angular/core';

import { Continents } from 'src/app/mock-continents';
import { Continent } from 'src/app/continent';
import { ContinentService } from 'src/app/continent.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.less' ]
})
export class HomeComponent implements OnInit {
  continents: Continent[] = [];

  constructor(private continentService: ContinentService) { }

  ngOnInit() {
    this.getContinents();
  }

  getContinents(): void {
    this.continentService.getContinents()
      .subscribe(continents => this.continents = continents.slice(1, 5));
  }
}
