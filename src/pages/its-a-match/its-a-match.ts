import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MeetKinkStersPage } from '../meet-kink-sters/meet-kink-sters';
import { MessagesPage } from '../messages/messages';
import { DungeonFinderWalkthorughPage } from '../dungeon-finder-walkthorugh/dungeon-finder-walkthorugh';
import { MenuSidePage } from '../menu-side/menu-side';
import { Chat } from '../chat/chat';
/**
 * Generated class for the ItsAMatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-its-a-match',
  templateUrl: 'its-a-match.html',
})
export class ItsAMatchPage {

   toUser:Object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.toUser = {
      toUserId:'210000198410281948',
      toUserName:'Hancock'
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ItsAMatchPage');
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
    goChat1(){
      this.navCtrl.push(Chat,{navParams:this.toUser});

    }
   
}
