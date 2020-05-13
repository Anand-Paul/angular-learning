import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelvinToCelsius'
})
export class KelvinToCelsiusPipe implements PipeTransform {
  //Function to convert the Kelvin to Celsius°
  transform(value: number, ...args: unknown[]): string {
    return (value - 273).toFixed(0) + '°';
  }
}
