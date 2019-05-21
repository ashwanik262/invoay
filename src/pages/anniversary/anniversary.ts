import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AnniversaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anniversary',
  templateUrl: 'anniversary.html',
})
export class AnniversaryPage {
  anniversaryList:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnniversaryPage');
    this.anniversaryList=	[{ name: 'Ashwani Kumar', phone: '', dob: 'November 5, 1955', img: 'assets/dummy/1.svg'},
  	{ name: 'Shivam', phone: '', dob: 'March 8, 1985', img: 'assets/dummy/2.svg'},
  	{ name: 'Prashant', phone: '', dob: 'December 5, 1987', img: 'assets/dummy/3.svg'},
  	{ name: 'Alexa', phone: '', dob: 'Aril 6, 1992', img: 'assets/dummy/4.svg'},
    { name: 'Tony', phone: '', dob: 'May 15, 1989', img: 'assets/dummy/5.svg'},
    { name: 'Mohit Rana', phone: '', dob: 'November 5, 1955', img: 'assets/dummy/1.svg'},
  	{ name: 'Satyam', phone: '', dob: 'March 8, 1985', img: 'assets/dummy/2.svg'},
  	{ name: 'Rahul Rai', phone: '', dob: 'December 5, 1987', img: 'assets/dummy/3.svg'},
  	{ name: 'Sanya Luice', phone: '', dob: 'Aril 6, 1992', img: 'assets/dummy/4.svg'},
  	{ name: 'Robert Lane', phone: '', dob: 'May 15, 1989', img: 'assets/dummy/5.svg'}];;
  }

}
