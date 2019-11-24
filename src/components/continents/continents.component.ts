import { Component, OnInit } from '@angular/core';
import { Continent } from 'src/app/continent';
import { ContinentService } from 'src/app/continent.service';



@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.css']
})
export class ContinentsComponent implements OnInit {
  continents: Continent[];

  constructor(private continentService: ContinentService) { }

  ngOnInit() {
    this.getContinents();
  }

  getContinents(): void {
    this.continentService.getContinents()
    .subscribe(continents => this.continents = continents);
  }
}
