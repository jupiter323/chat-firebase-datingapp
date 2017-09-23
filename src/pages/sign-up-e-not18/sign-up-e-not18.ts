import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignEmailPage } from '../sign-email/sign-email';
/**
 * Generated class for the SignUpENot18Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up-e-not18',
  templateUrl: 'sign-up-e-not18.html',
})
export class SignUpENot18Page {
  yeCheck:boolean;
  noCheck:boolean;
  buttoncolor:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.yeCheck = false;
    this.noCheck = true;
    this.buttoncolor = 'dissable';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpENot18Page');
  }
  comBack(){
     if(this.yeCheck)
       this.navCtrl.push(SignEmailPage);
    else
      this.navCtrl.push(SignUpENot18Page);



  }
   checkChange1(){
    if(this.yeCheck){
      this.noCheck=false;
      this.buttoncolor = 'danger';
    }
    else{
      this.noCheck=true;  
      this.buttoncolor = 'dissable';
    }
  }
  checkChange2(){
    if(this.noCheck){
      this.yeCheck=false;
      this.buttoncolor = 'dissable';
  }
    else{
      this.yeCheck=true;  
      this.buttoncolor = 'danger';
    }
  }
   
}
