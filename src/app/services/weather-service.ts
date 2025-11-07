import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey: string = 'e5012e37f94d4034ae8164507251810';
  private baseUrl: string = 'https://api.weatherapi.com/v1/forecast.json';

  constructor(private _http: HttpClient){}

  getWeather(city: string):Observable<any>{
    return this._http.get(`${this.baseUrl}?key=${this.apiKey}&q=${city},Egypt&aqi=no`)
  }
}
