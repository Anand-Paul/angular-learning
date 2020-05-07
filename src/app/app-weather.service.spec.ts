import { TestBed } from '@angular/core/testing';

import { AppWeatherService } from './app-weather.service';

describe('AppWeatherService', () => {
  let service: AppWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
