import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnChanges {

  @Input() pageTitle: string = 'Dashboard';

public salmarkerSettings: object = {
    fill: 'red',
    size: 5
};
public salaxisSettings: object = {
  lineSettings: {
      color: 'red',
      width: 2
  }
};
public saltooltipSettings: object = {
  format: '${xval}: ${yval}',
  trackLineSettings: {
      color: 'red',
      width: 1
  }
};
public salData: object[] = [
  { x: 0, xval: 'AUDI', yval: 1847613 },
  { x: 1, xval: 'BMW', yval: 2030331 },
  { x: 2, xval: 'BUICK', yval: 1465823 },
  { x: 3, xval: 'CETROEN', yval: 999888 },
  { x: 4, xval: 'CHEVROLET', yval: 3857388 },
  { x: 5, xval: 'FIAT', yval: 1503806 },
  { x: 6, xval: 'FORD', yval: 5953122 },
  { x: 7, xval: 'HONDA', yval: 4967689 },
  { x: 8, xval: 'HYUNDAI', yval: 3951176 },
  { x: 9, xval: 'JEEP', yval: 1390130 },
  { x: 10, xval: 'KIA', yval: 2511293 },
  { x: 11, xval: 'MAZDA', yval: 1495557 },
  { x: 12, xval: 'MERCEDES', yval: 2834181 },
  { x: 13, xval: 'NISSAN', yval: 4834694 },
  { x: 14, xval: 'OPEL/VHALL', yval: 996559 },
  { x: 15, xval: 'PEUGEOT', yval: 1590300 }
];

public pieData1: object[] = [{x: 'Gold', y : 46}, {x: 'Silver', y : 37}, {x: 'Bronze', y : 38}];

public pietooltipSettings: object = {
  visible: false,
  format: '${x} : ${y}',
};

public doughnutChartLabels: Label[] = ['Budget Consumed', 'Balance'];
public doughnutChartData = [
  [120, 70]
];
  public doughnutChartType: ChartType = 'doughnut';
  public donutOptions = {
    legend: {
      display: false
    }
  }
  public donutColors = [{
    backgroundColor: ["rgb(0, 189, 174)", "#DDDDDD"]
  }]
  public doughnutChartLabels1: Label[] = ['Gaming', 'Lottery'];
  public doughnutChartData1 = [
    [29, 23]
  ];
  public donutColors1 = [{
    backgroundColor: ["rgb(0, 189, 174)", "#ff4bac"]
  }]
  public donutOptions1 = {
    legend: {
      display: true,
      position: 'bottom'
    }
  }

  areaChartOptions = {
    responsive: true,
    legend: {
      display: false,
      position: 'bottom'
    }
  };

  areaChartData = [
    { data: [330, 600, 260, 700, 250, 400, 600], label: 'Account A' },
    { data: [120, 455, 100, 340, 400, 250, 300], label: 'Account B' },
    { data: [45, 67, 700, 500, 89, 300, 120], label: 'Account C' }
  ];

  areaChartLabels = ['January', 'February', 'Mars', 'April', 'May', 'June', 'July'];
  
  constructor() { }

  ngOnInit() {
    console.log('pageTitle', this.pageTitle);
  }

  ngOnChanges() {
    console.log('pageTitle', this.pageTitle);
  }

}
