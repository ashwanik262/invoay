import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, Modal } from "ionic-angular";
import { CalendarModal, CalendarModalOptions, CalendarResult } from "ion2-calendar";

/**
 * Generated class for the HoldbillsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-holdbills',
  templateUrl: 'holdbills.html',
})
export class HoldbillsPage {
  store: { name: string; id: string; }[];
  holdBill:any={date:'',time:'',customerName:'',lastEmployees:'',itemCount:'',totalAmount:''};
  holdBillsList=[];
  from: any;
  to: any;

  constructor(public navCtrl: NavController,private modalCtrl: ModalController,public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HoldbillsPage');
    for(var i=0;i<5;i++){
      this.holdBill.date="10/20/2018";
      this.holdBill.time="20:20 pm";
      this.holdBill.customerName="Paras"+i;
      this.holdBill.lastEmployees="Ankit"+i;
      this.holdBill.itemCount=""+i;
      this.holdBill.totalAmount='500'+i;
      this.holdBillsList.push(this.holdBill);
      this.holdBill=new Object();
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
