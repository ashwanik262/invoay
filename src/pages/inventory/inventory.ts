import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InventoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inventory',
  templateUrl: 'inventory.html',
})
export class InventoryPage {
  inventoryItem:any={productName:'',quantity:'',purchaseCost:'',saleCost:''};
  inventoryItemList=[];
  prpduct:any;
  prpductList=[];
  store: { name: string; id: string; }[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InventoryPage');
    for(var i=0;i<5;i++){
      this.inventoryItem.productName='Product'+i;
      this.inventoryItem.quantity=i*10;
      this.inventoryItem.purchaseCost=i*10+i;
      this.inventoryItem.saleCost=i*10+i;
      this.inventoryItemList.push(this.inventoryItem);
      this.inventoryItem=new Object();
    }
    this.store=[{name: "Store 1",id:"1"},{name: "Store 2",id:"2"},{name: "Store 3",id:"3"},{name: "Store 4",id:"4"},{name: "Store 5",id:"5"}]

  }

}
