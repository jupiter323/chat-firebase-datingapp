import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyProfileEdtingPage } from '../my-profile-edting/my-profile-edting';
import { MeetKinkStersPage } from '../meet-kink-sters/meet-kink-sters';
import { EmptyChatPage } from '../empty-chat/empty-chat';
import { DungeonFinderWalkthorughPage } from '../dungeon-finder-walkthorugh/dungeon-finder-walkthorugh';
import { MessagesPage } from '../messages/messages';
import { SettingsPage } from '../settings/settings';
import { GetStartedPage } from '../get-started/get-started';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the MenuSidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-side',
  templateUrl: 'menu-side.html',
})
export class MenuSidePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuSidePage');
  }
  goProfileMyprofileEditing(){
    this.navCtrl.push(MyProfileEdtingPage);

  }

  goBack(){
    this.navCtrl.pop();
  }
  goMeetKinkSters(){
    this.navCtrl.push(MeetKinkStersPage);
  }
  goEmptyChat(){
    this.navCtrl.push(EmptyChatPage);
  }
  goFindAKinkMatch(){
    this.navCtrl.push(MeetKinkStersPage);
  }
  goDungeonsNearMe(){
    this.navCtrl.push(DungeonFinderWalkthorughPage);
  }
  goDungeonMessages(){
     this.navCtrl.push(MessagesPage);
  }
  goSettings(){
     this.navCtrl.push(SettingsPage);
  }
  goLogout(){
    let enable:false;
    this.storage.clear();
    this.storage.set('enable', enable);
    this.navCtrl.setRoot(GetStartedPage);
  }
}
