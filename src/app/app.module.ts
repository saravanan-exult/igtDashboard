import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MaterialModule} from './shared/material-module';
import { SparklineAllModule } from '@syncfusion/ej2-angular-charts';
import { MorrisJsModule } from 'angular-morris-js';
import { ChartsModule } from 'ng2-charts';
import { EasyPieChartModule } from 'ng2modules-easypiechart';
import { ParticlesModule } from 'angular-particle';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { LotteryDashboardComponent } from './shared/components/lottery-dashboard/lottery-dashboard.component';
import { CustomerDashboardComponent } from './shared/components/customer-dashboard/customer-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LotteryDashboardComponent,
    CustomerDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MaterialModule,
    SparklineAllModule,
    MorrisJsModule,
    ChartsModule,
    EasyPieChartModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
