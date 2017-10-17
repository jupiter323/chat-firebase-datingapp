import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { MeetKinkStersPage } from '../meet-kink-sters/meet-kink-sters';
import { MessagesPage } from '../messages/messages';
import { DungeonFinderWalkthorughPage } from '../dungeon-finder-walkthorugh/dungeon-finder-walkthorugh';
import { MenuSidePage } from '../menu-side/menu-side';
import { UploadNoPicPage } from '../upload-no-pic/upload-no-pic';
import { GroupsPage } from '../groups/groups';
/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {

  notification: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    this.notification = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProfilePage');
    //this.menu.enable(true);
  }
  changePic() {
    this.navCtrl.push(UploadNoPicPage);
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
