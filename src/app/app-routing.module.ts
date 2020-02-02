import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './shared/components/dashboard/dashboard.component';
import {CustomerDashboardComponent} from './shared/components/customer-dashboard/customer-dashboard.component';


const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: 'lotteryDashboard', component: DashboardComponent },
  { path: 'customerDashboard', component: CustomerDashboardComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
