import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent implements OnInit {
  @Input() pageTitle: string = 'Customer Facing';

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

  public plannedProjectData = [{
    percent: 81,
    pieOptions: {
      barColor: 'rgb(0, 189, 174)',
      trackColor: '#f9f9f9',
      scaleColor: '#dfe0e0',
      scaleLength: 5,
      lineCap: 'round',
      lineWidth: 10,
      size: 100,
      rotate: 0,
      animate: {
          duration: 1000,
          enabled: true
      }
    },
    project: "Project 1",
    budget: "9,009,337"
  }, {
    percent: 78,
    pieOptions: {
      barColor: 'rgb(255, 188, 52)',
      trackColor: '#f9f9f9',
      scaleColor: '#dfe0e0',
      scaleLength: 5,
      lineCap: 'round',
      lineWidth: 10,
      size: 100,
      rotate: 0,
      animate: {
          duration: 1000,
          enabled: true
      }
    },
    project: "Project 2",
    budget: "2,402,844"
  }, {
    percent: 30,
    pieOptions: {
      barColor: 'rgb(251, 150, 120)',
      trackColor: '#f9f9f9',
      scaleColor: '#dfe0e0',
      scaleLength: 5,
      lineCap: 'round',
      lineWidth: 10,
      size: 100,
      rotate: 0,
      animate: {
          duration: 1000,
          enabled: true
      }
    },
    project: "Project 3",
    budget: "1,849,750"
  }]
  
  constructor() { }

  ngOnInit() {
  }

}
