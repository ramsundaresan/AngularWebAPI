import { Component, OnInit } from '@angular/core';
import { SAMPLE_LINECHART_COLORS } from '../../shared/chart.color'

const SAMPLE_LINECHART_DATA : any[] = [
  {data:[12, 14, 18, 26, 40, 45, 49, 90, 23, 25, 63, 40],label:"Sentimental Analysis"},
  {data:[18, 26, 40, 45, 49, 90, 32, 31, 23, 25, 63, 40],label:"Image Recognition"},
  {data:[18, 26, 40, 45, 49, 90, 32, 31, 23, 25, 63, 40],label:"ForeCasting"}
];

const SAMPLE_LINECHART_LABEL : string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }
  public lineChartData : any[] = SAMPLE_LINECHART_DATA;
  public lineChartLabels : string[] = SAMPLE_LINECHART_LABEL;
  public lineChartType ="line";
  public lineChartLegend = true; 
  public lineChartOptions : any = {
    responsive:true
  };
  public lineChartColors = SAMPLE_LINECHART_COLORS;
  ngOnInit() {
  }

}
