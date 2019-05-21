import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnniversaryPage } from '../../pages/anniversary/anniversary'
import { BirthdayPage } from '../../pages/birthday/birthday'
import { ModalController, Modal } from "ionic-angular";
import { CalendarModal, CalendarModalOptions, CalendarResult } from "ion2-calendar";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  todaySyncedDate:any;
  store:any=[];
  from: any;
  to: any;

  constructor(public navCtrl: NavController,private modalCtrl: ModalController) {
   
  }

  ionViewDidLoad(){
    this.todaySyncedDate=new Date();
    this.store=[{name: "Store 1",id:"1"},{name: "Store 2",id:"2"},{name: "Store 3",id:"3"},{name: "Store 4",id:"4"},{name: "Store 5",id:"5"}]
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
