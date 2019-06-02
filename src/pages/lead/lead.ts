import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeedbackPage } from '../feedback/feedback';
import { ModalController, Modal } from "ionic-angular";
import { CalendarModal, CalendarModalOptions, CalendarResult } from "ion2-calendar";

/**
 * Generated class for the LeadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lead',
  templateUrl: 'lead.html',
})
export class LeadPage {
  from: any;
  to: any;

  constructor(public navCtrl: NavController,private modalCtrl: ModalController,public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeadPage');
  }


  addLead(){
    this.navCtrl.push(FeedbackPage)
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
