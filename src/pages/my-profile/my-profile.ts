import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { MeetKinkStersPage } from '../meet-kink-sters/meet-kink-sters';
import { MessagesPage } from '../messages/messages';
import { DungeonFinderWalkthorughPage } from '../dungeon-finder-walkthorugh/dungeon-finder-walkthorugh';
import { MenuSidePage } from '../menu-side/menu-side';
import { UploadNoPicPage } from '../upload-no-pic/upload-no-pic';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProfilePage');
    //this.menu.enable(true);
  }
  changePic(){
     this.navCtrl.push(UploadNoPicPage);
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
