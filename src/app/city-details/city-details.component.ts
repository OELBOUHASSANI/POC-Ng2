import { Component,Input } from '@angular/core';
import { City } from '../city';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

export var single = [
  {
    "name": "Germany",
    "value": 8940000
  },
  {
    "name": "USA",
    "value": 5000000
  },
  {
    "name": "France",
    "value": 7200000
  }
];

export interface PromptModel {
  title:string;
  question:string;
};

@Component({
  selector: 'city-details',
  templateUrl: '../city-details/city-details.component.html',
  styleUrls: ['../city-details/city-details.component.css']
})
export class   CityDetailsComponent   extends DialogComponent<PromptModel, string> implements PromptModel {

  
  @Input() city: City;
  title: string="xx";
  question: string;
  message: string = '';
  

  
  onSelect(event) {
    console.log(event);
  }

  constructor(dialogService: DialogService) {

    super(dialogService);
 
  }


}