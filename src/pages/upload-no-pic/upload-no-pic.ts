import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MeetKinkStersPage } from '../meet-kink-sters/meet-kink-sters';
import { MessagesPage } from '../messages/messages';
import { DungeonFinderWalkthorughPage } from '../dungeon-finder-walkthorugh/dungeon-finder-walkthorugh';
import { MenuSidePage } from '../menu-side/menu-side';
import { MyProfileEdtingPage } from '../my-profile-edting/my-profile-edting';
import { GroupsPage } from '../groups/groups';
/**
 * Generated class for the UploadNoPicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload-no-pic',
  templateUrl: 'upload-no-pic.html',
})
export class UploadNoPicPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadNoPicPage');
  }

  uploadPic() {

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
  goMyprofileEditing() {
    this.navCtrl.push(MyProfileEdtingPage);
  }
  goGroups(){
    this.navCtrl.push(GroupsPage);
  }


}
