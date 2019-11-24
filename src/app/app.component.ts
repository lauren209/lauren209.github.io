import { Component } from '@angular/core';
import { Continent } from './continent';
import { ContinentService } from './continent.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Sometimes Alone Abroad';
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
