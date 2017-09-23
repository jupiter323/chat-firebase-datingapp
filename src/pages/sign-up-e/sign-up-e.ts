import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuSidePage } from '../menu-side/menu-side';
import { SignEmailPage } from '../sign-email/sign-email';
import { SignUpENot18Page } from '../sign-up-e-not18/sign-up-e-not18';
/**
 * Generated class for the SignUpEPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up-e',
  templateUrl: 'sign-up-e.html',
})
export class SignUpEPage {
  yeCheck:boolean;
  noCheck:boolean;
  email:string;
  password:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.yeCheck = true;
    this.noCheck = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpEPage');
  }
  SignUpF(){
    
    this.navCtrl.push(SignEmailPage);
  }
  SignUpE(){
    if(this.yeCheck)
       this.navCtrl.push(SignEmailPage);
    else
      this.navCtrl.push(SignUpENot18Page);
  }
  checkChange1(){
    if(this.yeCheck)
      this.noCheck=false;
    else
      this.noCheck=true;  
  }
  checkChange2(){
    if(this.noCheck)
      this.yeCheck=false;
    else
      this.yeCheck=true;  
  }
}
