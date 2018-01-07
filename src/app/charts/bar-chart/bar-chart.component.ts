import { Component, OnInit } from '@angular/core';

const SAMPLE_BARCHART_DATA : any[] = [
  {data:[12, 14, 18, 26, 40, 45, 49, 90],label:"Q3 Data"},
  {data:[18, 26, 40, 45, 49, 90, 32, 31],label:"Q4 Data"},
];

const SAMPLE_BARCHART_LABEL : string[] = ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8",]


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartData : any[] = SAMPLE_BARCHART_DATA;
  public barChartLabels : string[] = SAMPLE_BARCHART_LABEL;
  public barChartType ="bar";
  public barChartLegend = false; 
  public barChartOptions : any {
    scaleShowVerticalLines:false,
    responsive:true
  };

  ngOnInit() {
  }

}
