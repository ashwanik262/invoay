import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, Modal } from "ionic-angular";
import { CalendarModal, CalendarModalOptions, CalendarResult } from "ion2-calendar";


/**
 * Generated class for the DayreportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dayreport',
  templateUrl: 'dayreport.html',
})
export class DayreportPage {
  report:any={date:'',time:'',dayEndBy:'',totalSale:'',yesterdayOpening:'',membershipSale:'',cashSales:'',cardSales:'',paytmSales:'',
  mobikwikSales:'',walletSales:'',bigCity:'',littleSales:'',magicPinSales:'',nearbuySales:'',cashExpenses:'',byStoreAdvenceExpenses:'',
  totalExpenses:'',totalWalletRecharge:'',walletCashRecharge:'',expectedCash:'',cashWithdrawal:'',nextDayTillOpening:'',difference:'',
  handoverDepositAmount:'',handoverBankName:'',handoverClosingBalance:'',totalBillCount:'',totalCustomerCount:'',reason:''};
  reportsList=[];
  store: { name: string; id: string; }[];
  from: any;
  to: any;


  constructor(public navCtrl: NavController,private modalCtrl: ModalController,public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DayreportPage');
    for(var i=0;i<5;i++){
      this.report.date='01/01/2018';
      this.report.time='11:00 pm';
      this.report.dayEndBy='Pankaj';
      this.report.totalSale=5000;
      this.report.yesterdayOpening=2000;
      this.report.membershipSale=100;
      this.report.cashSales=1500;
      this.report.cardSales=400;
      this.report.paytmSales=100;
      this.report.mobikwikSales=0;
      this.report.walletSales=100;
      this.report.bigCity=0;
      this.report.littleSales=0;
      this.report.magicPinSales=0;
      this.report.nearbuySales=0;
      this.report.cashExpenses=50;
      this.report.byStoreAdvenceExpenses=100;
      this.report.totalExpenses=150;
      this.report.totalWalletRecharge=700;
      this.report.walletCashRecharge=500;
      this.report.expectedCash=1950;
      this.report.cashWithdrawal=1500;
      this.report.nextDayTillOpening=450;
      this.report.difference=0;
      this.report.handoverDepositAmount=1500;
      this.report.handoverBankName='ICICI';
      this.report.handoverClosingBalance=0;
      this.report.totalBillCount=5;
      this.report.totalCustomerCount=4;
      this.report.reason='ok';
      this.reportsList.push(this.report);
      this.report=new Object;
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
