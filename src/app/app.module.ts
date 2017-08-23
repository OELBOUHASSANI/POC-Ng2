import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CityComponent } from './city/city.component';
import { CityDetailsComponent } from './city-details/city-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModalModule} from 'ng2-modal';
import { AppComponent }        from './app.component';
import { RouterModule }   from '@angular/router';
import {GooglePlaceModule} from 'ng2-google-place-autocomplete';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { CityService } from "./city.service";
import { Http, Response } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {GoogleChart} from 'angular2-google-chart/directives/angular2-google-chart.directive';
import {NgxChartsModule} from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    CityComponent,
    AppComponent,
    DashboardComponent,
    CityDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GooglePlaceModule,
    ModalModule,
    BootstrapModalModule,
    HttpClientModule,
    NgxChartsModule,
    RouterModule.forRoot([
      {
        path: 'cities',
        component: CityComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
    ]),
    
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
