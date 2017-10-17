import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MeetKinkStersPage } from '../meet-kink-sters/meet-kink-sters';
import { MessagesPage } from '../messages/messages';
import { DungeonFinderWalkthorughPage } from '../dungeon-finder-walkthorugh/dungeon-finder-walkthorugh';
import { MenuSidePage } from '../menu-side/menu-side';
import { UploadPage } from '../upload/upload';
import { GroupsPage } from '../groups/groups';
/**
 * Generated class for the MyProfileEdtingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-profile-edting',
  templateUrl: 'my-profile-edting.html',
})
export class MyProfileEdtingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProfileEdtingPage');
  }
  changePic() {
    this.navCtrl.push(UploadPage);
  }
  goMeetKinkSters() {
    this.navCtrl.push(MeetKinkStersPage);
  }
  goMessages() {
    this.navCtrl.push(MessagesPage);
  }
  goDungeonFinderWalkthorugh() {
    this.navCtrl.push(DungeonFinderWalkthorughPage);
  }
  goMenuSide() {
    this.navCtrl.push(MenuSidePage);
  }
  goGroups(){
    this.navCtrl.push(GroupsPage);
  }
}
