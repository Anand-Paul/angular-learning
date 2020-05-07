import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherHighlightComponent } from './weather-highlight/weather-highlight.component';
import { WeatherInstancesComponent } from './weather-instances/weather-instances.component';
import { WeatherInstanceComponent } from './weather-instance/weather-instance.component';
import { LoaderComponent } from './loader/loader.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherHighlightComponent,
    WeatherInstancesComponent,
    WeatherInstanceComponent,
    LoaderComponent,
    HomeComponent,
    HeaderComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
