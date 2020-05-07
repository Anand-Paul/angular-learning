import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInstancesComponent } from './weather-instances.component';

describe('WeatherInstancesComponent', () => {
  let component: WeatherInstancesComponent;
  let fixture: ComponentFixture<WeatherInstancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherInstancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherInstancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
