import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from 'ionic-angular';

/*
  Generated class for the UseralertProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UseralertProvider {
  loading: any;

  constructor(public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
    console.log('Hello UseralertProvider Provider');
  }

  ShowError(message: any) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      cssClass: "toast-danger",
    });
    toast.present();
  }

  ShowSuccess(message: any) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      cssClass: "toast-success",
    });
    toast.present();
  }

  showLoading(msg?: string) {
    // if(!this.loaderVisible){
    this.loading = this.loadingCtrl.create({
      content: msg
    });
    this.loading.present().then(()=>{
      // this.loaderVisible = true;
    })
    // this.loaderVisible = true;
  // }
  // else{
  //   console.log('loader visible');
  // }
  }

  dismissLoading() {
    // if(this.loaderVisible){
    this.loading.dismiss();
    this.loading.onDidDismiss(()=>{
      // this.loaderVisible = false;
      // console.log('loader dismissed', this.loaderVisible);
    })
    // }
    // else{
    //   console.log('nothing to hide in loader');
    // }
  }
}