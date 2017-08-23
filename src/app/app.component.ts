import { Component } from '@angular/core';
import { DialogService } from "ng2-bootstrap-modal";
import { CityComponent } from './city/city.component';

 
@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {
   constructor(private dialogService:DialogService) {}
  title = 'Live weather';
    promptMessage:string = '';
  showPrompt() {
    this.dialogService.addDialog(CityComponent, {
      title:'Name dialog',
      question:'What is your name?: '})
      .subscribe((message)=>{
        //We get dialog result
        this.promptMessage = message;
      });
  }
}

