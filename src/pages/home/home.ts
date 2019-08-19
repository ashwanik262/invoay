import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AnniversaryPage } from '../../pages/anniversary/anniversary'
import { BirthdayPage } from '../../pages/birthday/birthday'
import { ModalController, Modal } from "ionic-angular";
import { CalendarModal, CalendarModalOptions, CalendarResult } from "ion2-calendar";
import { UseralertProvider } from '../../providers/useralert/useralert';
import { UserservicesProvider } from '../../providers/userservices/userservices';
import moment from "moment"; 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  todaySyncedDate:any;
  store:any=[];
  from: any;
  to: any;
  bills: any=[];
  sum: number=0;
  cancleBillsSum: number=0;
  cancleBills: any=[];
  lastSync: any;

  constructor(public navCtrl: NavController,private modalCtrl: ModalController,public userAlert : UseralertProvider,public userService:UserservicesProvider,public navParams: NavParams) {
  }

  ionViewDidLoad(){
    this.todaySyncedDate=new Date();
    this.store=[{name: "Store 1",id:"1"},{name: "Store 2",id:"2"},{name: "Store 3",id:"3"},{name: "Store 4",id:"4"},{name: "Store 5",id:"5"}]
  }

  ionViewWillEnter(){
    this.getBills();
  }

  getBills() {
    this.userAlert.showLoading('Please Wait...');
    let userToken=sessionStorage.getItem('userAccessToken');
    var d = new Date();
    // d.setDate(d.getDate() - 1);
    let date = moment(d).format("DD-MMM-YYYY");
   
    this.userService.getBills(userToken,date,date).subscribe(res => {
      console.log('getBills data :- ' + res);
      
      // console.log("sum000,0",sum)
      if(res){
        this.bills=res;
        this.lastSync=this.bills[(this.bills.length)-1].BillDateTime
      this.sum = this.bills.reduce((a, b) => a + (b['BillTotal'] || 0), 0);
      this.cancleBills= this.bills.filter(function(item) {
        return item.IsReturned == true;
      });
      if(this.cancleBills){
        this.cancleBillsSum = this.cancleBills.reduce((a, b) => a + (b['BillTotal'] || 0), 0);
      }
        console.log("cancleBills",this.cancleBills)
      }
      this.userAlert.dismissLoading();
    }, error => {
      console.log(error);
      this.userAlert.dismissLoading();
    });
  }


  birthdays(){
    this.navCtrl.push(BirthdayPage)

  }

  anniversary(){
    this.navCtrl.push(AnniversaryPage)
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

// openCalendar() {
//   const options: CalendarModalOptions = {
//     pickMode: 'range',
//     title: 'RANGE'
//   };

//   const myCalendar =  this.modalCtrl.create({
//     component: CalendarModal,
//     componentProps: { options }
//   });

//   myCalendar.present();

//   // const event: any = myCalendar.onDidDismiss(date);
//   // const date = event.data;
//   // const from: CalendarResult = date.from;
//   // const to: CalendarResult = date.to;

//   // console.log(date, from, to);
// }

}
