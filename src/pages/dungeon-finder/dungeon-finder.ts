import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MeetKinkStersPage } from '../meet-kink-sters/meet-kink-sters';
import { MessagesPage } from '../messages/messages';
import { MenuSidePage } from '../menu-side/menu-side';
import { DungeonFinderWalkthorughPage } from '../dungeon-finder-walkthorugh/dungeon-finder-walkthorugh';
import { DungeonListingPage } from '../dungeon-listing/dungeon-listing';
/**
 * Generated class for the DungeonFinderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dungeon-finder',
  templateUrl: 'dungeon-finder.html',
})
export class DungeonFinderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DungeonFinderPage');
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
    goDungeonListing(){
      this.navCtrl.push(DungeonListingPage);

    }


}
