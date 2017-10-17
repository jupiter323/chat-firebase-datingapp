import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MeetKinkStersPage } from '../meet-kink-sters/meet-kink-sters';
import { MessagesPage } from '../messages/messages';
import { DungeonFinderWalkthorughPage } from '../dungeon-finder-walkthorugh/dungeon-finder-walkthorugh';
import { MenuSidePage } from '../menu-side/menu-side';
import { DungeonListingPage } from '../dungeon-listing/dungeon-listing';
import { GroupsPage } from '../groups/groups';
/**
 * Generated class for the WriteAReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-write-a-review',
  templateUrl: 'write-a-review.html',

})
export class WriteAReviewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  public mark1: any;
  public mark2: any;
  public mark3: any;
  public mark4: any;
  ionViewDidLoad() {
    console.log('ionViewDidLoad WriteAReviewPage');
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
  noteChanged(event) {
    console.log(event);
    this.mark1 = event._value / 10.0;


  }
  noteChanged1(event) {
    console.log(event);
    this.mark2 = event._value / 10.0;


  }
  noteChanged2(event) {
    console.log(event);
    this.mark3 = event._value / 10.0;


  }
  noteChanged3(event) {
    console.log(event);
    this.mark4 = event._value / 10.0;


  }
  goYourDR() {
    this.navCtrl.push(DungeonListingPage);

  }
  goGroups(){
    this.navCtrl.push(GroupsPage);
  }



}
