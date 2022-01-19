import { Component, Injectable, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import {HttpClient} from "@angular/common/http";
import {catchError, of,map} from "rxjs";

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  lat;
  lon;
  weather;
  options: google.maps.MapOptions = {
    center: {lat: 40, lng: -20},
    zoom: 4
  };
  apiLoaded

  constructor(private weatherService: WeatherService,private httpClient:HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw', 'callback')
      .pipe(map(() => true),
        catchError(() => of(false)),
      );
   }

  ngOnInit(){
  //  this.weatherService.getWeatherDataByCoords(35,139).subscribe(console.log)
      this.getLocation();
  }

  getLocation(){

    if("geolocation" in navigator){

      navigator.geolocation.watchPosition( (success) =>{

        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;

        this.weatherService.getWeatherDataByCoords(this.lat, this.lon).subscribe(data=>{
            this.weather = data ;
        });
      })
    }
  }


  getCity(city){
    this.weatherService.getWeatherByCityName(city).subscribe(data=>{
      this.weather = data;
    })
  }

}
