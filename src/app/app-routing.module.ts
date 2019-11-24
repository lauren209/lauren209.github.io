import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/components/home/home.component';
import { ContinentDetailsComponent } from 'src/components/continent-details/continent-details.component';
import { ContinentsComponent } from 'src/components/continents/continents.component';
import { DestinationsComponent } from 'src/components/destinations/destinations.component';
import { AboutMeComponent } from 'src/components/about-me/about-me.component';
import { CountryDetailsComponent } from 'src/components/country-details/country-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: ':name/:id', component: ContinentDetailsComponent },
  { path: 'continents', component: ContinentsComponent },
  { path: 'destinations', component: DestinationsComponent},
  { path: 'about-me', component: AboutMeComponent},
  { path: ':name', component: CountryDetailsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
