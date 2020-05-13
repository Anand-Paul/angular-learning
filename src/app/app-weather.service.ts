import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppWeatherService {

  CITY: string = "thrissur";
  API_KEY: string = "2072812fa0029f3d93a1a2c1b89f755d";
  API: string = "http://api.openweathermap.org/data/2.5/weather?";
  API_FORECAST: string = "http://api.openweathermap.org/data/2.5/forecast?";

  latitude: number;
  longitude: number;

  constructor(private httpClient: HttpClient) { }

  //Get highlighted data when the select box is selected.
  public getData(city: string): Observable<any> {
    let target = (city == '') ? this.CITY : city;
    return this.httpClient.get(this.API + "q=" + target + "&appid=" + this.API_KEY);
  }

  //Get Instances data when the select box is selected.
  public getCurrentData(city: string): Observable<any> {
    let target = (city == '') ? this.CITY : city;
    return this.httpClient.get(this.API_FORECAST + "q=" + target + "&appid=" + this.API_KEY);
  }

  //Get geolocation form the browser
  public getLocation() {
    let cusotmObserver = new Observable((observer) => {
      if (!navigator.geolocation) {
        observer.error();
      }

      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        observer.next({ latitude: position.coords.longitude, longitude: position.coords.latitude });
      });
    });

    return cusotmObserver;
  }

  //Using the geolocation get the Highlighted data
  public getGeoLocationAPI() {
    return this.httpClient.get(this.API + "lat=" + this.latitude + "&lon=" + this.longitude + "&appid=" + this.API_KEY);
  }

  //Using the geolocation get the Instances data
  public getCurrentGeoLocationAPI() {
    return this.httpClient.get(this.API_FORECAST + "lat=" + this.latitude + "&lon=" + this.longitude + "&appid=" + this.API_KEY);
  }

  //Fetch the Major cities needed for the select box
  public getCities() {
    return this.httpClient.get("assets/city.json");
  }
}
