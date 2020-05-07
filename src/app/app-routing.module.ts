import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherComponent } from './weather/weather.component';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'form', component: FormsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
