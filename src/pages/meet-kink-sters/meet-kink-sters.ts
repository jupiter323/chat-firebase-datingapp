import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item, ItemSliding } from 'ionic-angular';

import { MessagesPage } from '../messages/messages';
import { DungeonFinderWalkthorughPage } from '../dungeon-finder-walkthorugh/dungeon-finder-walkthorugh';
import { MenuSidePage } from '../menu-side/menu-side';
import { ItsAMatchPage } from '../its-a-match/its-a-match';
import { MyProfileEdtingPage } from '../my-profile-edting/my-profile-edting';
import { GroupsPage } from '../groups/groups';
// import $ from 'jquery';


/**
 * Generated class for the MeetKinkStersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import {
  StackConfig,
  DragEvent,
  SwingStackComponent,
  SwingCardComponent
} from 'angular2-swing';


@IonicPage()
@Component({
  selector: 'page-meet-kink-sters',
  templateUrl: 'meet-kink-sters.html'
})
export class MeetKinkStersPage {

  like: boolean;
  dislike: boolean;
  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;

  cards: Array<any>;
  stackConfig: StackConfig;
  recentCard: string = '';
  cardX: any;
  selectFlag: boolean;

  brightLevel: boolean;
  cardnumber: any;

  tempelement: any;
  listelementFlag: boolean;
  tempx:any;
  constructor(public navCtrl: NavController, public http: Http) {

    this.like = false;
    this.dislike = false;
    this.selectFlag = false;
    this.brightLevel = false;
    this.cardnumber = 2;
    this.listelementFlag = false;
    this.tempx = 0;
    this.stackConfig = {
      throwOutConfidence: (offset, element: any) => {
        return Math.min(Math.abs(offset) / (element.offsetWidth / 2), 1);
      },
      transform: (element, x, y, r) => {
        this.onItemMove(element, x, y, r);
        this.cardX = x;
      },
      throwOutDistance: (d) => {
        return 800;
      }
    };
  }

  ionViewDidLoad() {
    //  window.location.reload();
    // $("#list").removeClass('list-ios');

  }

  ngAfterViewInit() {
    // Either subscribe in controller or set in HTML
    this.swingStack.throwin.subscribe((event: DragEvent) => {
      event.target.style.background = '#ffffff';
    });
    this.cards = [{ email: '' }];
    this.cards.pop();
    this.addNewCards(2);
  }

  mouseup() {
    this.brightLevel = false;
    this.like = false;
    this.dislike = false;
    if (this.cardX > 45)
      this.voteUp(false);
    else if (this.cardX < -57)
      this.voteUp(true);
  }

  brightset() {
    //  $("#list").removeClass('list-ios');
    //  $("#list").removeClass('list');
    this.brightLevel = true;

  }
  
  brightset1(event) {
    this.brightLevel = true;
    if(this.tempx > event.x){
      console.log("left");
      this.like = true;
      this.dislike = false;
      this.tempx = event.x;
    }
    else  if(this.tempx < event.x) {
      this.dislike =true;
      this.like = false;
      console.log("right");
      this.tempx = event.x;  
    }
    // event.target.classList.remove('list-ios');
    //  $("#list").removeClass('list-ios');
    //  $("#list").removeClass('list');

    // this.brightLevel = true;

  }
  // Called whenever we drag an element
  onItemMove(element, x, y, r) {
    if (this.listelementFlag) {
      this.listelementFlag = false;
      element = this.tempelement;
    }
    let color = '';
    const abs = Math.abs(x);
    const min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
    const hexCode = this.decimalToHex(min, 2);

    if (x > 0) {
      color = '#' + hexCode + 'FF' + hexCode;
      if (x > 45) this.dislike = true;
      else
        this.dislike = false;
    } else {
      if (x < -57) this.like = true;
      else
        this.like = false;
      color = '#FF' + hexCode + hexCode;
    }
    // console.log(x);

    element.style.background = color;
    element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
  }


  // Connected through HTML
  voteUp(like: boolean) {
    const removedCard = this.cards.pop();
    this.cardnumber--;
    if (this.cardnumber == 0) {
      this.cardnumber = 4;
      this.addNewCards(4);
    }
    if (like) {
      // this.toastCtrl.create('You liked: ' + removedCard.email);
    } else {
      // this.toastCtrl.create('You disliked: ' + removedCard.email);
    }
  }

  // Add new cards to our array
  addNewCards(count: number) {
    this.http.get('https://randomuser.me/api/?results=' + count)
      .map(data => data.json().results)
      .subscribe(result => {
        for (const val of result) {
          this.cards.push(val);
        }
      });
  }

  // http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
  decimalToHex(d, padding) {
    let hex = Number(d).toString(16);
    padding = typeof (padding) === 'undefined' || padding === null ? padding = 2 : padding;
    while (hex.length < padding) {
      hex = '0' + hex;
    }

    return hex;
  }

  deleteItemLike(list, index) {
    console.log("ok");
    list.splice(this.cards.length - index - 1, 1);
    this.cardnumber--;

    if (this.cardnumber == 0) {
      this.cardnumber = 4;
      this.addNewCards(4);
    }
  }
  deleteItemDislike(list, index) {
    console.log("ok");
    list.splice(this.cards.length - index - 1, 1);
    this.cardnumber--;

    
    if (this.cardnumber == 0) {
      this.cardnumber = 4;
      this.addNewCards(4);
    }
  }
  showLikeDis(event) {
    console.log(event);
  }

  swipeSomething(element) {
    console.log(event);
    this.tempelement = element;
    this.listelementFlag = true;
  }
  onclickSelecttinder() {
    this.selectFlag = !this.selectFlag;
  }
  goProfile() {
    this.navCtrl.push(MyProfileEdtingPage);
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
  goItsamatch() {
    this.navCtrl.push(ItsAMatchPage);
  }
  goGroups(){
    this.navCtrl.push(GroupsPage);
  }
}
