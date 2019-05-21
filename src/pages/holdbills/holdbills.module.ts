import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HoldbillsPage } from './holdbills';

@NgModule({
  declarations: [
    HoldbillsPage,
  ],
  imports: [
    IonicPageModule.forChild(HoldbillsPage),
  ],
})
export class HoldbillsPageModule {}
