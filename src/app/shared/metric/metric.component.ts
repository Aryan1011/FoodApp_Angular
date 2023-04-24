import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { metricApiService } from './metricapi.service';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css'],
  template: '<apx-chart [options]="chartOptions" [series]="chartData"></apx-chart>'
})
export class MetricComponent implements OnInit {
// Pagination 
page:number=1;
  count:number=0;
  tableSize:number=4;
  tableSizes:any=[5,10,15,20];
  onTableDataChange(event:any):void{
    this.page=event;
  }
  
//ends
chartData:any

initial:boolean=true;
  totalOrders: number = 0;
  totalRevenue: number = 0;
  ItemQuantity: any;
  categoryPercentage: any;
  chart: any;
  options = {
    aspectRatio:2.5,
    tooltips: {
      enabled: false
    },
    plugins: {
      datalabels: {
        formatter: (value:any, ctx:any) => {
          const datapoints = ctx.chart.data.datasets[0].data
           const total = datapoints.reduce((total:any, datapoint:any) => total + datapoint, 0)
          const percentage = value / total * 100
          return percentage.toFixed(2) + "%";
        },
        color: '#fff',
      }
    }
  };
 
  constructor(private _metricApiService: metricApiService) {

  }

  @ViewChild('startDate') startDate?: ElementRef;
  @ViewChild('endDate') endDate?: ElementRef;
   
  ngOnInit(): void {
  }

  createChart(data:any){
    if(this.chart){
      this.chart.destroy();
    }

    const chartData = Object.entries(data).map(([category, value]) => ({
      Category: category,
      Value: value
    }));

    this.chart = new Chart("MyChart", {
      plugins:[ChartDataLabels],
      type: 'doughnut', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: Object.keys(data),
	       datasets: [{
    label: 'Category sales',
    data: Object.values(data),
    backgroundColor: [
      'red',
      'pink',
      'green',
			'yellow',
      'orange',
      'blue',	
      'brown',
      'grey',
      'black'		
    ],
    hoverOffset: 4
  }],
      },
      options: this.options

    });
    this.chartData = chartData;
  }

  today() {

    this.initial=false;
    this._metricApiService.getTodayItemQuantity().subscribe((data) => {
      this.ItemQuantity = data;
    });
    this._metricApiService.getTodayMetrics().subscribe((data) => {
      this.totalOrders = data.totalOrders;
      this.totalRevenue = data.totalRevenue;
    });
    this._metricApiService.getTodayCategoryPercentage().subscribe((data)=>{
      this.createChart(data);
      this.ngOnInit();
    })
  }

  getByDate() {
    this.initial=false;
    var obj = {
      startDate: this.startDate?.nativeElement.value,
      endDate: this.endDate?.nativeElement.value,
    };
    if (obj.startDate > obj.endDate) {
      alert('Please enter valid date');
      return;
    }
    this._metricApiService.getDateItemQuantity(obj).subscribe((data) => {
      console.log(data);
      this.ItemQuantity = data;
    });
    this._metricApiService.getByDateMetrics(obj).subscribe((data) => {
      this.totalOrders = data.totalOrders;
      this.totalRevenue = data.totalRevenue;
    });
    this._metricApiService.getDateCategoryPercentage(obj).subscribe(data=>{
      
      this.createChart(data);
      this.ngOnInit();
    })
  }

 
  divide(x: any, total: number) {
    let num = (x / total) * 100;
    let s = num.toFixed(1);
    return s;
  }
  

  exportToExcel() {
    console.log(this.ItemQuantity);
    const tableData = this.getTableData(); // replace this with your own method to get table data
    const chartData = this.getChartData(); // replace this with your own method to get chart data
    
    const worksheet = XLSX.utils.json_to_sheet([ ...tableData, ...chartData]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
    
    // save the workbook as an Excel file
    const fileName = 'data.xlsx';
    XLSX.writeFile(workbook, fileName);
  }
  
  getChartData(): any[] {
    return this.chartData.map((slice:any) => ({
      Category: slice.Category,
      Value: slice.Value
    }));
  }

  getTableData(){
    if (!this.ItemQuantity) {
      return [];
    }
    const data = [];
    for (const [item, quantity] of Object.entries(this.ItemQuantity)) {
      data.push({ Item: item, Quantity: quantity });
    }
    return data;
  }

 
}
