import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyProfileEdtingPage } from './my-profile-edting';

@NgModule({
  declarations: [
    MyProfileEdtingPage,
  ],
  imports: [
    IonicPageModule.forChild(MyProfileEdtingPage),
  ],
})
export class MyProfileEdtingPageModule {}
