import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, Modal } from "ionic-angular";
import { CalendarModal, CalendarModalOptions, CalendarResult } from "ion2-calendar";

/**
 * Generated class for the BillreportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-billreport',
  templateUrl: 'billreport.html',
})
export class BillreportPage {
  bill:any={billNumber:'',date:'',time:'',billBy:'',grossTotal:'', memberShipDiscount:'',percentageDiscount:'',
  		cashDiscount:'',gst:'',totalBill:'',payAmount:'',paymentMode:'',customerName:'',customerNumber:'',
  		returnBillDate:'',returBillTime:'',returnBy:'',returnReason:''};
  billList=[];
	store: { name: string; id: string; }[];
	from: any;
  to: any;

  constructor(public navCtrl: NavController,private modalCtrl: ModalController,public navParams: NavParams) {
    for(var i=0;i<5;i++){
  	  this.bill.billNumber=i+'';
  	  this.bill.date='11 Jan 2013';
  	  this.bill.time='10:20 am';
  	  this.bill.billBy='Ankit';
  	  this.bill.grossTotal=500+'';
  	  this.bill.memberShipDiscount=210;
  	  this.bill.percentageDiscount='10%';
  	  this.bill.cashDiscount='50';
  	  this.bill.gst=14+'';
  	  this.bill.totalBill=514+'';
  	  this.bill.payAmount=432+'';
  	  this.bill.paymentMode='Cash';
  	  this.bill.customerName='Shivam';
  	  this.bill.customerNumber='938298298429';
  	  if(i%2===0){
  	  	this.bill.returnBillDate='12 Jan 2015';
  	  	this.bill.returBillTime='03 : 30 pm';
  	  	this.bill.returnBy='Ram';
  	  	this.bill.returnReason='software malfunction';
  	  }	
      this.billList.push(this.bill);
      this.bill=new Object();
    }
    this.store=[{name: "Store 1",id:"1"},{name: "Store 2",id:"2"},{name: "Store 3",id:"3"},{name: "Store 4",id:"4"},{name: "Store 5",id:"5"}]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BillreportPage');
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
