import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MeetKinkStersPage } from '../meet-kink-sters/meet-kink-sters';
import { Chat } from '../chat/chat';
import { DungeonFinderWalkthorughPage } from '../dungeon-finder-walkthorugh/dungeon-finder-walkthorugh';
import { MenuSidePage } from '../menu-side/menu-side';
import { GroupsPage } from '../groups/groups';

/**
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {

  toUser: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.toUser = {
      toUserId: '210000198410281948',
      toUserName: 'Hancock'
    }
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesPage');
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
  goChat() {
    // this.navCtrl.push(Chat);
    this.navCtrl.push(Chat, { navParams: this.toUser });
  }
  goGroups(){
    this.navCtrl.push(GroupsPage);
  }
}
