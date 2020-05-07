import { Component, OnInit, Input } from '@angular/core';
import { AppWeatherService } from '../app-weather.service';

@Component({
  selector: 'app-weather-highlight',
  templateUrl: './weather-highlight.component.html',
  styleUrls: ['./weather-highlight.component.scss']
})
export class WeatherHighlightComponent implements OnInit {
  @Input() data: object;
  @Input() selected: boolean;
  @Input() loadingHighlight: boolean;


  constructor(public weatherService: AppWeatherService) { }

  ngOnInit(): void {
  }

}
