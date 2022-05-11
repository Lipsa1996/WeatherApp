import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherData} from 'src/app/models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  production!: boolean;
  constructor(private http:HttpClient) { }

  getWeatherData(cityName:string):Observable<WeatherData>
  {
    return this.http.get< WeatherData>(environment.weatherApiBaseUrl,{
       headers: new HttpHeaders()
                .set(environment.XRapidAPIHostName,environment.XRapidAPIHostValue)
                .set(environment.XRapidAPIKeyName,environment.XRapidAPIKeyValue),
       params: new HttpParams()
                .set('q',cityName)
                .set('units','metric')
                .set('mode','json')
     })
  }

}
