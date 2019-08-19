import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, Modal } from "ionic-angular";
import { CalendarModal, CalendarModalOptions, CalendarResult } from "ion2-calendar";
import { UseralertProvider } from '../../providers/useralert/useralert';
import { UserservicesProvider } from '../../providers/userservices/userservices';
import moment from "moment"; 
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
  response: any;

  constructor(public navCtrl: NavController,private modalCtrl: ModalController,public userAlert : UseralertProvider,public userService:UserservicesProvider,public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BillreportPage');
    this.getbillList();
  }
  
  getbillList() {
    this.userAlert.showLoading('Please Wait...');
    let userToken=sessionStorage.getItem('userAccessToken');
    var d = new Date();
    // d.setDate(d.getDate() - 1);
    let startdate = moment(d).format("DD-MMM-YYYY");
    let enddate = moment(d).format("DD-MMM-YYYY");
   
    this.userService.getBills(userToken,startdate,enddate).subscribe(res => {
      console.log('getbillList data :- ' + res);
      this.response =res;
    this.billList=res;
      if(res){
        // this.measures =res;
      }
      this.userAlert.dismissLoading();
    }, error => {
      console.log(error);
      this.userAlert.dismissLoading();
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

getItems(ev: any) {
  // this.isSearch = true;
  // set val to the value of the searchbar
  const val = ev.target.value;
  if (val == '') {
    // this.isSearch = false;
    this.billList = this.response;

    return;
  }
  if (val && val.trim() != '') {
        this.billList = this.response;
        console.log(this.billList.length);
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {

          this.billList = this.billList.filter((item) => {
            return ((item.BillId.toString().indexOf(val.toLowerCase()) > -1) || (item.BillByEmployeeId.toString().indexOf(val.toLowerCase()) > -1));
          })
        }
  }




}

}
