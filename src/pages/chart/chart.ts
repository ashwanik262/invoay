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
  @ViewChild('barCanvas') barCanvas;
  doughnutChart: any;
  keys:any=['Products','Services','Packages','Package Deals','Membership'];
  servicekeys:any=['arm Wax','Deep tissue massage','glabal','hair coloring','hair cut','head massage','Head Spa','party makeup','Reflex massage'];
  values:any=[180,120,80,260,225];
  servicevalues:any=[180,120,80,260,225,475,154,20,545]
  barChart: any;
  from: any;
  to: any;
  service: boolean=false;
  sale: boolean=false;

  constructor(public navCtrl: NavController,private modalCtrl: ModalController,public navParams: NavParams) {
    
    Chart.defaults.global.legend.position = "bottom"
    Chart.defaults.global.legend.labels.boxWidth = 10;
    Chart.defaults.global.legend.labels.padding = 15;
    Chart.defaults.global.legend.labels.usePointStyle = true;
    Chart.defaults.global.responsive = true;
    Chart.defaults.global.animation.easing = "easeInOutSine";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChartPage');
    // this.initDoughnutChart();
    // this.initBarChart();
    // this.segmentChanged("sale");
  }

  segmentChanged(type:any){
    console.log("type",type)
    if(type="sale"){
      this.sale=true;
      this.service=false;
      this.initBarChart();
      return;
    }
    if(type="Services"){
      this.service=true;
      this.sale=false;
      this.initDoughnutServiceChart();
      return;
    }
    if(type="Stores"){
      this.service=true;
      this.sale=false;
      this.initDoughnutChart();
      return;
    }

  }

  initDoughnutChart() {
    if (this.doughnutChart != undefined) {
      this.doughnutChart.destroy();
    }
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: this.keys,
        datasets: [{
          label: '# of Votes',
          data: this.values,
          backgroundColor: [
            '#48C9B0',
            '#EC7063',
            '#F0B27A',
            '#85C1E9',
            '#BB8FCE',
            '#85929E',
          ],
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

  initDoughnutServiceChart() {
    if (this.doughnutChart != undefined) {
      this.doughnutChart.destroy();
    }
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
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
          ],
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

    initBarChart() {
    if (this.barChart != undefined) {
      this.barChart.destroy();
    }
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['jan','feb','march','april','may','june','july','aug','sep','oct','nov','dec'],
        datasets: [
          {
            label: "Wallet",
            backgroundColor: "#f25454",
            borderColor: "#f25454",
            data: [125,258,120,318,187,588,215,526,215,15,547,145]
          },
          {
            label: "Sale",
            backgroundColor: "#24d6ea",
            borderColor: "#24d6ea",
            data: [140,85,157,258,14,158,351,51,526,215,185,251]
          }
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
