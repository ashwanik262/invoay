import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DayreportPage } from './dayreport';

@NgModule({
  declarations: [
    DayreportPage,
  ],
  imports: [
    IonicPageModule.forChild(DayreportPage),
  ],
})
export class DayreportPageModule {}
