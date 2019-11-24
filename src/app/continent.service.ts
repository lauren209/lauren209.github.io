import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Continent } from './continent';
import { Continents } from './mock-continents';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class ContinentService {

  constructor(private messageService: MessageService) { }

  getContinents(): Observable<Continent[]> {
    // TODO: send the message _after_ fetching the Continentes
    this.messageService.add('ContinentService: fetched Continentes');
    return of(Continents);
  }

  getContinent(id: number): Observable<Continent> {
    // TODO: send the message _after_ fetching the Continent
    this.messageService.add(`ContinentService: fetched Continent id=${id}`);
    return of(Continents.find(Continent => Continent.id === id));
  }
}
