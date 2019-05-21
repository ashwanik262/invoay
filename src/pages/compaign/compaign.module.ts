import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompaignPage } from './compaign';

@NgModule({
  declarations: [
    CompaignPage,
  ],
  imports: [
    IonicPageModule.forChild(CompaignPage),
  ],
})
export class CompaignPageModule {}
