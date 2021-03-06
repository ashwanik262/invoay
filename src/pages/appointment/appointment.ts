import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewappointmentPage } from '../newappointment/newappointment';
import { ModalController, Modal } from "ionic-angular";
import { CalendarModal, CalendarModalOptions, CalendarResult } from "ion2-calendar";

/**
 * Generated class for the AppointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html',
})
export class AppointmentPage {
  appointment:any={storeName:'',customerName:'',customerNumber:'',serviceName:'',remark:'',receivedByStore:'',date:'',time:''};
  appointmentList=[];
  todaySyncedDate: Date;
  store: { name: string; id: string; }[];
  from: any;
  to: any;

  constructor(public navCtrl: NavController,private modalCtrl: ModalController,public navParams: NavParams) {
    for(var i=0;i<5;i++){
  		this.appointment.storeName='name'+i;
  		this.appointment.customerName='customer'+i;
  		this.appointment.customerNumber='987645452'+i;
  		this.appointment.serviceName='Hair Cut';
  		this.appointment.remark='remark'+i;
  		this.appointment.receivedByStore='Pending';
  		this.appointment.date='02/12/201'+i;
  		this.appointment.time='10:00 pm';
  		this.appointmentList.push(this.appointment);
  		this.appointment=new Object();
    }
    this.todaySyncedDate=new Date();
    this.store=[{name: "Store 1",id:"1"},{name: "Store 2",id:"2"},{name: "Store 3",id:"3"},{name: "Store 4",id:"4"},{name: "Store 5",id:"5"}]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentPage');
  }

  addAppointment(){
    this.navCtrl.push(NewappointmentPage)
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
