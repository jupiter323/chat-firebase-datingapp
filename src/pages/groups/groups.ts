import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { MeetKinkStersPage } from '../meet-kink-sters/meet-kink-sters';
import { MessagesPage } from '../messages/messages';
import { DungeonFinderWalkthorughPage } from '../dungeon-finder-walkthorugh/dungeon-finder-walkthorugh';
import { MenuSidePage } from '../menu-side/menu-side';
import { Http } from '@angular/http';
/**
 * Generated class for the GroupsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html',
})
export class GroupsPage {
  @ViewChild('slider') slider: Slides;
  cards: Array<any>;
  groups: boolean;
  detailedgroup: boolean;
  detailedpost: boolean;
  detailedpostcomment: boolean;
  groupdetail: string;
  groupdetailpost:string;
  groupdetailpostdate:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

    this.groups = true;
    this.detailedgroup = false;
    this.detailedpost = false;
    this.detailedpostcomment = false;

    this.groupdetail = '';
    this.groupdetailpost = '';
    this.groupdetailpostdate = '';

    for (let i = 0; i < 5; i++) {
      this.slides.push(this.slides[i % 4]);
    }

    this.cards = [{ email: '' }];
    this.cards.pop();
    this.http.get('https://randomuser.me/api/?results=' + 3)
      .map(data => data.json().results)
      .subscribe(result => {
        for (const val of result) {
          this.cards.push(val);
        }
      });
      this.initializeItems();

  }


  slides = [
    {
      title: 'Novices & Newbies',
      imageUrl: 'assets/img/photo.png',
      songs: 2,
      private: false
    },
    {
      title: 'Staying safe',
      imageUrl: 'assets/img/photo1.png',
      songs: 4,
      private: false
    },
    {
      title: 'Family Time',
      imageUrl: 'assets/img/photo2.png',
      songs: 5,
      private: true
    },
    {
      title: 'My Trip',
      imageUrl: 'assets/img/photo3.png',
      songs: 12,
      private: true
    }
  ];
  /////////////////////////////////////////////search
  searchQuery: string = '';
  items: Array<any>;


  initializeItems() {
    this.items = [
      {
        title: 'INTRODUCE YOURSELF HERE',
        date: 'Last comment 6 days ago'
      },
      {
        title: 'MODE ALERT! - Alert moderators about a N&N discussion that needs attention',
        date: 'Last comment 4 days ago'
      },
      {
        title: 'MEETING AND FINDING PEOPLE, MUNCHES & EVENTS',
        date: 'Last comment 3 days ago'
      },
      {
        title: 'CHOOSING, UNDERSTANDING, AND LIVING ROLE',
        date: 'Last comment 2 hours ago'
      },
      {
        title: 'HOW TO PLAY, WHAT TO DO, WHAT TO WEAR, WHAT TO USE, AND WHERE TO GET IT?',
        date: 'Last comment 2 days ago'
      },
      {
        title: 'FAQ(Frequently Asked Questions) - Please read',
        date: 'Last comment 1 days ago'
      },

    ];
    
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the ev target
    var val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  ////////////////////////end search

  goDetailedGroup(i: number) {
    this.groups = false;
    this.detailedgroup = true;
    this.detailedpost = false;
    this.detailedpostcomment = false;
    this.groupdetail = this.slides[i].title;
  }
  goDetailedPost(i:number){
    this.groups = false;
    this.detailedgroup = false;
    this.detailedpost = true;
    this.detailedpostcomment = false;
    this.groupdetailpost = this.items[i].title;
    this.groupdetailpostdate = this.items[i].date;

  }
  goDetailedPostcomment(){
    this.groups = false;
    this.detailedgroup = false;
    this.detailedpost = false;
    this.detailedpostcomment = true;

  }
  goBefore(){
    if(this.detailedgroup){
      this.groups =  true;
      this.detailedgroup = false;
      this.detailedpost = false;
      this.detailedpostcomment = false;
    }
    else if(this.detailedpost){
      this.groups =  false;
      this.detailedgroup = true;
      this.detailedpost = false;
      this.detailedpostcomment = false;

    }
    else if(this.detailedpostcomment){
      this.groups =  false;
      this.detailedgroup = false;
      this.detailedpost = true;
      this.detailedpostcomment = false;
    }
  }
  ngAfterViewInit() {
    this.slider.freeMode = true;
  }


  goGroups(){
    this.navCtrl.push(GroupsPage);
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

}
