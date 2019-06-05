import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { ModalController, Modal } from "ionic-angular";
import { CalendarModal, CalendarModalOptions, CalendarResult } from "ion2-calendar";

/**
 * Generated class for the ChartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html',
})
export class ChartPage {
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('pieCanvas') pieCanvas
  @ViewChild('barCanvas') barCanvas;
  doughnutChart: any;
  doughnutServiceChart: any;
  keys: any = ['Products', 'Services', 'Packages', 'Package Deals', 'Membership'];
  servicekeys: any = ['arm Wax', 'Deep tissue massage', 'glabal', 'hair coloring', 'hair cut', 'head massage', 'Head Spa', 'party makeup', 'Reflex massage'];
  values: any = [180, 120, 80, 260, 225];
  servicevalues: any = [180, 120, 80, 260, 225, 475, 154, 20, 545]
  barChart: any;
  from: any;
  to: any;
  isService: boolean = false;
  isSale: boolean = false;
  isStore: boolean = false;
  segment: any = ['Sale', 'Stores', 'Days', 'Customer', 'Services', 'Employee', 'Male vs Female']
  googleChartLibrary: any;

  constructor(public navCtrl: NavController, private modalCtrl: ModalController, public navParams: NavParams) {

    Chart.defaults.global.legend.position = "bottom"
    Chart.defaults.global.legend.labels.boxWidth = 10;
    Chart.defaults.global.legend.labels.padding = 15;
    Chart.defaults.global.legend.labels.usePointStyle = true;
    Chart.defaults.global.responsive = true;
    Chart.defaults.global.animation.easing = "easeInOutSine";
  }

  ionViewDidLoad() {
    this.buttonClicked("Sale");
    console.log('ionViewDidLoad ChartPage');
    // this.initDoughnutChart();
    this.initBarChart("#f25454");
    this.initPieChart();


  }




  buttonClicked(type: any) {
    switch (type) {
      case 'Sale':
        this.isSale = true;
        if (this.doughnutChart != undefined) {

          this.isService = false;
          this.isStore = false;
          this.doughnutChart.destroy();
        }
        if (this.doughnutServiceChart != undefined) {
          this.isService = false;
          this.isStore = false;
          this.doughnutServiceChart.destroy();
        }
        if (this.isSale) {
          this.initBarChart("#f25454");
        }
        break;
      case 'Services':
        this.isService = true;
        if (this.doughnutChart != undefined) {

          this.isSale = false;
          this.isStore = false;
          this.doughnutChart.destroy();
        }
        if (this.barChart != undefined) {
          this.isSale = false;
          this.isStore = false;
          this.barChart.destroy();
        }
        if (this.isService) {
          this.initPieChart();
        }
        break;
      case 'Stores':
        this.isStore = true;
        if (this.doughnutChart != undefined) {

          this.isService = false;
          this.isSale = false;
          this.doughnutChart.destroy();
        }
        if (this.barChart != undefined) {
          this.isService = false;
          this.isSale = false;
          this.barChart.destroy();
        }
        if (this.isStore) {
          this.initDoughnutChart([
            '#48C9B0',
            '#EC7063',
            '#F0B27A',
            '#85C1E9',
            '#BB8FCE',
            '#85929E',
          ],this.keys,this.values);
        }
        break;
      case 'Days':
        this.isSale = true;
        if (this.doughnutChart != undefined) {

          this.isService = false;
          this.isStore = false;
          this.doughnutChart.destroy();
        }
        if (this.doughnutServiceChart != undefined) {
          this.isService = false;
          this.isStore = false;
          this.doughnutServiceChart.destroy();
        }
        if (this.isSale) {
          this.initBarChart("#48C9B0");
        }
        break;
      case 'Customer':
        this.isSale = true;
        if (this.doughnutChart != undefined) {

          this.isService = false;
          this.isStore = false;
          this.doughnutChart.destroy();
        }
        if (this.doughnutServiceChart != undefined) {
          this.isService = false;
          this.isStore = false;
          this.doughnutServiceChart.destroy();
        }
        if (this.isSale) {
          this.initBarChart("#85C1E9");
        }
        break;
      case 'Employee':
        this.isSale = true;
        if (this.doughnutChart != undefined) {

          this.isService = false;
          this.isStore = false;
          this.doughnutChart.destroy();
        }
        if (this.doughnutServiceChart != undefined) {
          this.isService = false;
          this.isStore = false;
          this.doughnutServiceChart.destroy();
        }
        if (this.isSale) {
          this.initBarChart("#24d6ea");
        }
        break;
        case 'Male vs Female':
          this.isStore = true;
          if (this.doughnutChart != undefined) {
  
            this.isService = false;
            this.isSale = false;
            this.doughnutChart.destroy();
          }
          if (this.barChart != undefined) {
            this.isService = false;
            this.isSale = false;
            this.barChart.destroy();
          }
          if (this.isStore) {
            this.initDoughnutChart([
              '#f25454',
              '#48C9B0'
            ],['male','female'],[158,453]);
          }
          break;
    }
    console.log("type", type)

  }

  initDoughnutChart(colors,keys,values) {
    if (this.doughnutChart != undefined) {
      this.doughnutChart.destroy();
    }
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels:keys,
        datasets: [{
          label: '# of Votes',
          data: values,
          backgroundColor: colors,
          hoverBackgroundColor: [
            '#48C9B0',
            '#EC7063',
            '#F0B27A',
            '#85C1E9',
            '#BB8FCE',
            '#85929E',
          ]
        }]
      }

    });
  }

  initPieChart() {
    if (this.doughnutChart != undefined) {
      this.doughnutChart.destroy();
    }
    this.doughnutServiceChart = new Chart(this.pieCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: this.servicekeys,
        datasets: [{
          label: '# of Votes',
          data: this.servicevalues,
          backgroundColor: [
            '#48C9B0',
            '#EC7063',
            '#F0B27A',
            '#85C1E9',
            '#BB8FCE',
            '#85929E',
            '#85C2F7',
            '#BB8dc5',
            '#859s54',
          ],
          hoverBackgroundColor: [
            '#48C9B0',
            '#EC7063',
            '#F0B27A',
            '#85C1E9',
            '#BB8FCE',
            '#85929E',
            '#85C2F7',
            '#BB8dc5',
            '#859s54',
          ]
        }]
      }

    });
  }

  initBarChart(color) {
    if (this.barChart != undefined) {
      this.barChart.destroy();
    }
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['jan', 'feb', 'march', 'april', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'],
        datasets: [
          {
            label: "Sale",
            backgroundColor: color,
            borderColor: color,
            data: [125, 258, 120, 318, 187, 588, 215, 526, 215, 15, 547, 145]
          },
          // {
          //   label: "Sale",
          //   backgroundColor: "#24d6ea",
          //   borderColor: "#24d6ea",
          //   data: [140,85,157,258,14,158,351,51,526,215,185,251]
          // }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });
  }


  durationChange(duration) {
    if (duration === 'date') {
      // this.selectedDuration='Custom Dates'
      this.openCalendar();
      // localStorage.setItem("durationType", "Custom Dates");
    }
  }

  openCalendar() {
    const options: CalendarModalOptions = {
      pickMode: 'range',
      canBackwardsSelected: false,

    };
    let myCalendar = this.modalCtrl.create(CalendarModal, {
      options: options
    });
    myCalendar.present();
    myCalendar.onDidDismiss((date, type: string) => {
      this.from = date.from.dateObj.toISOString();
      this.to = date.to.dateObj.toISOString();
    })
  }

}
