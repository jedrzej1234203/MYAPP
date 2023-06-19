import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent {
  constructor(private pogoda: WeatherService) {}
  weather: any;
  weatherData = {
    timezone:'',
    maxTemp:'',
    minTemp:'',
    sunrise:'',
    sunset:''
  }
  aktualnaGodzina: Date = new Date();
  id = setInterval(() => {
    this.aktualnaGodzina = new Date();
  }, 1000);

  ngOnInit() {
    this.pogoda.getWeatherData().subscribe((result) => {
      this.weather = result;
      this.weatherData.timezone =this.weather.timezone;
      this.weatherData.maxTemp= this.weather.daily.temperature_2m_max[0];
      this.weatherData.minTemp=this.weather.daily.temperature_2m_min[0];
      this.weatherData.sunrise = this.weather.daily.sunrise[0];
      this.weatherData.sunset = this.weather.daily.sunset[0];
    }
        )
  }
  

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }
}
