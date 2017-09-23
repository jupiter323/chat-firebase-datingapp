import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MessagesPage } from '../messages/messages';
import { DungeonFinderWalkthorughPage } from '../dungeon-finder-walkthorugh/dungeon-finder-walkthorugh';
import { MenuSidePage } from '../menu-side/menu-side';
import { ItsAMatchPage } from '../its-a-match/its-a-match';
/**
 * Generated class for the MeetKinkStersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meet-kink-sters',
  templateUrl: 'meet-kink-sters.html',
})
export class MeetKinkStersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeetKinkStersPage');
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
   goItsamatch(){
     this.navCtrl.push(ItsAMatchPage);
   }
}
