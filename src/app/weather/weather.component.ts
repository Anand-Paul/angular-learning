import { Component, OnInit } from '@angular/core';
import { AppWeatherService } from '../app-weather.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  currentData: object;
  allDatas: object;
  cities: object;
  selected: boolean = false;
  loadingHighlight: boolean = true;
  loadingInstances: boolean = true;

  constructor(private weatherService: AppWeatherService) { }

  ngOnInit(): void {
    //Initial Loading from the geolocation
    this.weatherService.getLocation().pipe(switchMap((ev) => this.weatherService.getGeoLocationAPI())).subscribe((result) => {
      this.currentData = result;
      this.loadingHighlight = false;
    });

    this.weatherService.getLocation().pipe(switchMap((ev) => this.weatherService.getCurrentGeoLocationAPI())).subscribe((result) => {
      this.allDatas = result;
      this.loadingInstances = false;
    });

    this.weatherService.getCities().subscribe((data: object) => {
      this.cities = data;
    });
  }

  onSelected(city: string) {
    //on selection of dropdown api calls rerender
    this.selected = true;
    this.loadingInstances = true;
    this.loadingHighlight = true;

    this.weatherService.getData(city).subscribe((result: any[]) => {
      this.currentData = result;
      this.loadingHighlight = false;
    });

    this.weatherService.getCurrentData(city).subscribe((result: any[]) => {
      this.allDatas = result;
      this.loadingInstances = false;
    });
  }
}
