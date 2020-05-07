import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInstanceComponent } from './weather-instance.component';

describe('WeatherInstanceComponent', () => {
  let component: WeatherInstanceComponent;
  let fixture: ComponentFixture<WeatherInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
