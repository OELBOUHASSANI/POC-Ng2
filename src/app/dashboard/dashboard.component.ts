import { Component  } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';
import { CityDetailsComponent } from '../city-details/city-details.component';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls:['./dashboard.compoent.css'],

})
export class DashboardComponent   {
    


  constructor(private cityService: CityService) { 
  }

  cities=this.cityService.getCities();

 }