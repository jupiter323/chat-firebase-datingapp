import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmptyChatPage } from './empty-chat';

@NgModule({
  declarations: [
    EmptyChatPage,
  ],
  imports: [
    IonicPageModule.forChild(EmptyChatPage),
  ],
})
export class EmptyChatPageModule {}
