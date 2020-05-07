import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-instances',
  templateUrl: './weather-instances.component.html',
  styleUrls: ['./weather-instances.component.scss']
})
export class WeatherInstancesComponent implements OnInit {
  @Input() data: object;
  @Input() loadingInstances: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
