import { Component, OnInit } from '@angular/core';

const SAMPLE_PIECHART_DATA : any[] = [320, 450, 500];

const SAMPLE_PIECHART_LABEL : string[] = ["Wipro", "Twight", "TCS"];

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  
  public pieChartData : any[] = SAMPLE_PIECHART_DATA;
  public pieChartLabels : string[] = SAMPLE_PIECHART_LABEL;
  public colors : any[] = [
    {
      backgroundColor : ["#26547c","#ff6b68","#ffd166"],
      borderColor:"#111"
    }
  ]
  public pieChartType = "doughnut"

  ngOnInit() {
  }

}
