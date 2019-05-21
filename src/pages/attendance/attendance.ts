import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AttendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html',
})
export class AttendancePage {
   
  employeeAttendance:any={employeeName:'',checkInTime:'',checkOutTime:'',totalHours:''};
  employeeAttendancesList=[];
  store: { name: string; id: string; }[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendancePage');
    for(var i=0;i<5;i++){
      this.employeeAttendance.employeeName="Title"+i;
      this.employeeAttendance.checkInTime="12:0"+i;
      this.employeeAttendance.checkOutTime="7:4"+i;
      this.employeeAttendance.totalHours="7:4"+i;
      this.employeeAttendancesList.push(this.employeeAttendance);
      this.employeeAttendance=new Object();
    }
    this.store=[{name: "Store 1",id:"1"},{name: "Store 2",id:"2"},{name: "Store 3",id:"3"},{name: "Store 4",id:"4"},{name: "Store 5",id:"5"}]

  }

}
