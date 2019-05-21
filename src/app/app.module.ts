import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AppointmentPage } from '../pages/appointment/appointment'
import { AnniversaryPage } from '../pages/anniversary/anniversary'
import { AttendancePage } from '../pages/attendance/attendance'
import { BirthdayPage } from '../pages/birthday/birthday'
import { BillreportPage } from '../pages/billreport/billreport'
import { CompaignPage } from '../pages/compaign/compaign'
import { DayreportPage } from '../pages/dayreport/dayreport'
import { HoldbillsPage } from '../pages/holdbills/holdbills'
import { InventoryPage } from '../pages/inventory/inventory'
import { SalePage } from '../pages/sale/sale'
import { AddCampaignPage } from '../pages/add-campaign/add-campaign';
import { NewappointmentPage } from '../pages/newappointment/newappointment';
import { FeedbackPage } from '../pages/feedback/feedback';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CalendarModule } from "ion2-calendar";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AppointmentPage,
    AnniversaryPage,
    AttendancePage,
    BirthdayPage,
    BillreportPage,
    CompaignPage,
    DayreportPage,
    HoldbillsPage,
    InventoryPage,
    SalePage,
    AddCampaignPage,
    NewappointmentPage,
    FeedbackPage






  ],
  imports: [
    BrowserModule,
    CalendarModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AppointmentPage,
    AnniversaryPage,
    AttendancePage,
    BirthdayPage,
    BillreportPage,
    CompaignPage,
    DayreportPage,
    HoldbillsPage,
    InventoryPage,
    SalePage,
    AddCampaignPage,
    NewappointmentPage,
    FeedbackPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
