import {
    Injectable,
    Inject
} from '@angular/core';
import {
    Http,
    Response
} from '@angular/http';
import 'rxjs/add/operator/map';


import {
    City
} from './city';
import {
    HttpClient
} from "@angular/common/http";

let endPoint: String = "http://api.openweathermap.org/data/2.5/weather?q=";
let appKey: String = "a968bb75ede7f580be916f8e2ad700de";

export let cities: City[] = [
  
    {
        id: 2,
        name: 'Larache',
        temperature: "20",
        weather: ""
    },
    {
        id: 1,
        name: 'Paris',
        temperature: "15",
        weather: ""
    },
];

@Injectable()
export class CityService {
    constructor(private http: HttpClient) {}

    getCities(): City[] {
        cities.forEach(city => {
            this.http.get(endPoint + city.name + "&appid=" + appKey).subscribe(data => {
                city.temperature = (Math.round((data["main"].temp - 273.15) * 10) / 10).toString()
                city.weather = data["weather"][0].main;

                console.log(city);

            });
        })
        return cities;

    }

    addCity(cityName: string) {
        let city: City = new City();
        city.name = cityName;
        this.http.get(endPoint + cityName + "&appid="+appKey).subscribe(data => {
            city.temperature = (Math.round((data["main"].temp - 273.15) * 10) / 10).toString()
            city.weather = data["weather"][0].main;
            console.log(city);

        });

        cities.push(city)
    }
}