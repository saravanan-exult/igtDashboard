import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'igtPmoDashboard';
  sidenavOpen: boolean = true;
  particleStyle: object = {};
  particleParams: object = {};
  particleWidth: number = 100;
  particleHeight: number = 100;

  ngOnInit() {
    this.particleStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '200px',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
    };
    this.particleParams = {
      particles: {
          number: {
              value: 150,
          },
          color: {
              value: '#ff0000'
          },
          shape: {
              type: 'circle',
          },
      }
    };
  }
}
