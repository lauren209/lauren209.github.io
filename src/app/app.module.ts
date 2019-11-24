import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ContinentDetailsComponent } from 'src/components/continent-details/continent-details.component';
import { ContinentsComponent } from 'src/components/continents/continents.component';
import { DestinationsComponent } from 'src/components/destinations/destinations.component';
import { HomeComponent } from 'src/components/home/home.component';
import { MessagesComponent } from 'src/components/messages/messages.component';
import { AboutMeComponent } from '../components/about-me/about-me.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryDetailsComponent } from '../components/country-details/country-details.component';
import { ThailandComponent } from '../components/countries/thailand/thailand.component';
import { IrelandComponent } from '../components/countries/ireland/ireland.component';
import { UsaComponent } from '../components/countries/usa/usa.component';
import { CanadaComponent } from '../components/countries/canada/canada.component';
import { EnglandComponent } from '../components/countries/england/england.component';
import { FranceComponent } from '../components/countries/france/france.component';
import { ItalyComponent } from '../components/countries/italy/italy.component';
import { TaiwanComponent } from '../components/countries/taiwan/taiwan.component';
import { JordanComponent } from '../components/countries/jordan/jordan.component';
import { EgyptComponent } from '../components/countries/egypt/egypt.component';
import { CarouselComponent } from '../components/carousel/carousel.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { GreeceComponent } from '../components/countries/greece/greece.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SlideshowModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ContinentsComponent,
    ContinentDetailsComponent,
    MessagesComponent,
    AboutMeComponent,
    DestinationsComponent,
    CountryDetailsComponent,
    ThailandComponent,
    IrelandComponent,
    UsaComponent,
    CanadaComponent,
    EnglandComponent,
    FranceComponent,
    ItalyComponent,
    TaiwanComponent,
    JordanComponent,
    EgyptComponent,
    CarouselComponent,
    GreeceComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
