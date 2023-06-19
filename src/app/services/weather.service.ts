import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 url = 'https://api.open-meteo.com/v1/forecast?latitude=-25.30&longitude=150.31&hourly=temperature_2m,rain,windspeed_10m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=Europe%2FBerlin'
  constructor(private http: HttpClient) {
   }

   getWeatherData(){
    return this.http.get(this.url);
   }


}