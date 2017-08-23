import { Component } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

export interface PromptModel {
  title:string;
  question:string;
}


@Component({
  selector: 'my-cities',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],

})




export class CityComponent extends DialogComponent<PromptModel, string> implements PromptModel {
  title: string="xx";
  question: string;
  message: string = '';
  newCity:City={ id: 0, name: 'Rabat',temperature:'',weather:''}
  constructor(dialogService: DialogService,private cityService: CityService) {
    super(dialogService);
  }


addCity(): void {
console.log(this.newCity);
  this.cityService.addCity(this.newCity.name);
      this.close();

}
  
}