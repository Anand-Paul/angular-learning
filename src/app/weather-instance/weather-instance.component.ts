import { Component, OnInit, Input } from '@angular/core';
import { AppWeatherService } from '../app-weather.service';

@Component({
  selector: 'app-weather-instance',
  templateUrl: './weather-instance.component.html',
  styleUrls: ['./weather-instance.component.scss']
})
export class WeatherInstanceComponent implements OnInit {
  @Input() data: object;

  constructor(public weatherService: AppWeatherService) { }

  ngOnInit(): void {
  }
}
