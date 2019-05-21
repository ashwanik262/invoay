import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddCampaignPage } from '../add-campaign/add-campaign';

/**
 * Generated class for the CompaignPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compaign',
  templateUrl: 'compaign.html',
})
export class CompaignPage {
  campaign:any={title:'',content:'',sentDate:'',sentToCustomers:'',viewedBy:''};
  campaignsList=[];
  store: { name: string; id: string; }[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompaignPage');
    for(var i=0;i<5;i++){
      this.campaign.title="Title"+i;
      this.campaign.content="ADAD"+i;
      this.campaign.sentDate="Date"+i;
      this.campaign.sentToCustomers="60"+i;
      this.campaign.viewedBy="30"+i;
      this.campaignsList.push(this.campaign);
      this.campaign=new Object();
    }
    this.store=[{name: "Store 1",id:"1"},{name: "Store 2",id:"2"},{name: "Store 3",id:"3"},{name: "Store 4",id:"4"},{name: "Store 5",id:"5"}]

  }

  addCampaign(){
    this.navCtrl.push(AddCampaignPage);
  }

}
