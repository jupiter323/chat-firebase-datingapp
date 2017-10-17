import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MeetKinkStersPage } from '../meet-kink-sters/meet-kink-sters';
import { MessagesPage } from '../messages/messages';
import { DungeonFinderWalkthorughPage } from '../dungeon-finder-walkthorugh/dungeon-finder-walkthorugh';
import { MenuSidePage } from '../menu-side/menu-side';
import { Chat } from '../chat/chat';
import { WriteAReviewPage } from '../write-a-review/write-a-review';
import { GroupsPage } from '../groups/groups';
/**
 * Generated class for the DungeonListingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dungeon-listing',
  templateUrl: 'dungeon-listing.html',
})
export class DungeonListingPage {
  toUser: Object;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.toUser = {
      toUserId: '210000198410281948',
      toUserName: 'Hancock'
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DungeonListingPage');
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
    this.navCtrl.push(Chat, { navParams: this.toUser });

  }
  goWriteAR() {
    this.navCtrl.push(WriteAReviewPage);
  }
  goGroups(){
    this.navCtrl.push(GroupsPage);
  }
  //   slides = [
  //   {
  //     // title: "Welcome to the Docs!",
  //     // description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
  //     image: "../assets/img/dungeonIner.png",

  //   },
  //   {
  //     // title: "What is Ionic?",
  //     // description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
  //     // image: "assets/img/ica-slidebox-img-2.png",
  //      image: "assets/img/dungeonIner.png",
  //   },
  //   {
  //     // title: "What is Ionic Cloud?",
  //     // description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
  //     // image: "assets/img/ica-slidebox-img-3.png",
  //      image: "assets/img/dungeonIner.png",
  //   }
  //   // {
  //   //   // title: "What is Ionic?",
  //   //   // description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
  //   //   // image: "assets/img/ica-slidebox-img-2.png",
  //   //    image: "assets/img/splash/splashover18.png",
  //   // }
  // ];


}
