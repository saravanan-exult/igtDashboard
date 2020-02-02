import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lottery-dashboard',
  templateUrl: './lottery-dashboard.component.html',
  styleUrls: ['./lottery-dashboard.component.scss']
})
export class LotteryDashboardComponent implements OnInit {
  public pageTitle: string = 'Lottery';
  constructor() { }

  ngOnInit() {
  }

}
