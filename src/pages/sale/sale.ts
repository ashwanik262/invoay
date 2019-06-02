import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, Modal } from "ionic-angular";
import { CalendarModal, CalendarModalOptions, CalendarResult } from "ion2-calendar";

/**
 * Generated class for the SalePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sale',
  templateUrl: 'sale.html',
})
export class SalePage {
  employeeSales:any={employeeName:'',productSales:Number,servicesSales:Number,packageSales:Number,membershipSales:Number,packageInServices:Number,totalSales:Number};
  employeeSalesList=[];
  store: { name: string; id: string; }[];
  from: any;
  to: any;

  constructor(public navCtrl: NavController,private modalCtrl: ModalController,public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalePage');
    for(var i=0;i<5;i++){
      if(i==0){
        this.employeeSales.employeeName='Paras'
      }
      if(i==1){
        this.employeeSales.employeeName='Deepak'
      }
      if(i==2){
        this.employeeSales.employeeName='Ram'
      }
      if(i==3){
        this.employeeSales.employeeName='Ankit'
      }
      if(i==4){
        this.employeeSales.employeeName='Akshay'
      }
      this.employeeSales.productSales=500+i;
      this.employeeSales.servicesSales=300+i;
      this.employeeSales.packageSales=200+i;
      this.employeeSales.membershipSales=100+i;
      this.employeeSales.packageInServices=50+i;
      this.employeeSales.totalSales=this.employeeSales.productSales+this.employeeSales.servicesSales+this.employeeSales.packageSales+
      this.employeeSales.membershipSales+this.employeeSales.packageInServices;
      this.employeeSalesList.push(this.employeeSales);
      this.employeeSales=new Object();
    }
    this.store=[{name: "Store 1",id:"1"},{name: "Store 2",id:"2"},{name: "Store 3",id:"3"},{name: "Store 4",id:"4"},{name: "Store 5",id:"5"}]

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
