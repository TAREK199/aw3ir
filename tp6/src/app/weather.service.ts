import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url = "https://api.openweathermap.org/data/2.5/weather";
  apiKey = "3764bb9fc5c326ac62ae38dfdafc5738";

  constructor(private http:HttpClient) { }


    getWeatherDataByCoords(lat,lon){

      let params = new HttpParams()
      .set('lat',lat)
      .set('lon',lon)
      .set('units','imperial')
      .set('appid',this.apiKey)

      return this.http.get(this.url, {params} );

    }

    getWeatherByCityName(city:string){

      let params = new HttpParams()
      .set('q', city)
      .set('units','imperial')
      .set('appid',this.apiKey)

      return this.http.get(this.url, {params});

    }

}
