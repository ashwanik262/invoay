import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { LeadPage } from '../pages/lead/lead';
import { ChartPage } from '../pages/chart/chart';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CalendarModule } from "ion2-calendar";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ApisProvider } from '../providers/apis/apis';
import { UserservicesProvider } from '../providers/userservices/userservices';
import { UrlProvider } from '../providers/url/url';
import { HttpRestclientProvider } from '../providers/http-restclient/http-restclient';
import { UseralertProvider } from '../providers/useralert/useralert';

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
    FeedbackPage,
    LeadPage,
    ChartPage






  ],
  imports: [
    BrowserModule,
    CalendarModule,
    HttpClientModule,
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
    FeedbackPage,
    LeadPage,
    ChartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApisProvider,
    UserservicesProvider,
    UrlProvider,
    HttpRestclientProvider,
    UseralertProvider
  ]
})
export class AppModule {}
