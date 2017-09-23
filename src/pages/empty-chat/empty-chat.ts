import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MeetKinkStersPage } from '../meet-kink-sters/meet-kink-sters';
import { MessagesPage } from '../messages/messages';
import { DungeonFinderWalkthorughPage } from '../dungeon-finder-walkthorugh/dungeon-finder-walkthorugh';
import { MenuSidePage } from '../menu-side/menu-side';
/**
 * Generated class for the EmptyChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-empty-chat',
  templateUrl: 'empty-chat.html',
})
export class EmptyChatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmptyChatPage');
  }
      goMeetKinkSters(){
      this.navCtrl.push(MeetKinkStersPage);
    }
    goMessages(){
      this.navCtrl.push(MessagesPage);
    }
    goDungeonFinderWalkthorugh(){
      this.navCtrl.push(DungeonFinderWalkthorughPage);
    }
    goMenuSide(){
      this.navCtrl.push(MenuSidePage);
    }

}
