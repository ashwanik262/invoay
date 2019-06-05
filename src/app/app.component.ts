import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AppointmentPage } from '../pages/appointment/appointment'
import { AttendancePage } from '../pages/attendance/attendance'
import { BillreportPage } from '../pages/billreport/billreport'
import { CompaignPage } from '../pages/compaign/compaign'
import { DayreportPage } from '../pages/dayreport/dayreport'
import { HoldbillsPage } from '../pages/holdbills/holdbills'
import { InventoryPage } from '../pages/inventory/inventory'
import { SalePage } from '../pages/sale/sale'
import { FeedbackPage } from '../pages/feedback/feedback';
import { LeadPage } from '../pages/lead/lead';
import { ChartPage } from '../pages/chart/chart';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{ title: string, component: any }>;

  constructor(private iab: InAppBrowser, public alertCtrl: AlertController, public menu: MenuController, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  appointment() {
    this.nav.push(AppointmentPage)

  }

  billReport() {
    this.nav.push(BillreportPage)

  }

  campaign() {
    this.nav.push(CompaignPage)

  }

  inventory() {
    this.nav.push(InventoryPage)
  }

  dayReport() {
    this.nav.push(DayreportPage)
  }

  sale() {
    this.nav.push(SalePage)

  }

  attendance() {
    this.nav.push(AttendancePage)
  }

  holdBills() {
    this.nav.push(HoldbillsPage)
  }

  lead() {
    this.nav.push(LeadPage)
  }

  chart() {
    this.nav.push(ChartPage)
    // this.cominSoon();
  }

  logoutAlert() {
    this.menu.close();
    let confirm = this.alertCtrl.create({
      title: 'LOGOUT?',
      message: 'Do you agree to <b>LOGOUT</b>?',
      buttons: [
        {
          text: 'CANCEL',
          handler: () => {
            //  console.log('Disagree clicked');
          }
        },
        {
          text: 'LOGOUT',
          handler: () => {
            this.logout();
          }
        }
      ]
    });
    confirm.present();
  }

  logout() {
    localStorage.clear();
    this.nav.setRoot(LoginPage);
  }

  cominSoon() {
    this.menu.close();
    let confirm = this.alertCtrl.create({
      title: 'Under Construction?',
      message: 'This Feature is <b>Under Construction </b>?',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            //  console.log('Disagree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  raiseTicket() {
    const browser = this.iab.create('https://helpdesk.invoay.com/index.php');
    browser.on('loadstop').subscribe(event => {
      browser.insertCSS({ code: "body{color: red;" });
    });
  }

}
