import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnniversaryPage } from './anniversary';

@NgModule({
  declarations: [
    AnniversaryPage,
  ],
  imports: [
    IonicPageModule.forChild(AnniversaryPage),
  ],
})
export class AnniversaryPageModule {}
