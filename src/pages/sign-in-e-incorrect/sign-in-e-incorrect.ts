import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyProfilePage } from '../my-profile/my-profile';
import { SignUpEPage } from '../sign-up-e/sign-up-e';

/**
 * Generated class for the SignInEIncorrectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in-e-incorrect',
  templateUrl: 'sign-in-e-incorrect.html',
})
export class SignInEIncorrectPage {
 password:string;
  emailinput:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignEmailPage');
  }
  SignInF(){
    this.navCtrl.push(MyProfilePage);
  }
  SignInE(){
    if((this.emailinput=="vic@sample.com")&&(this.password=="123"))
      this.navCtrl.push(MyProfilePage);
    else
      this.navCtrl.push(SignInEIncorrectPage);
  }
  SignUpE(){
    this.navCtrl.push(SignUpEPage);

  }
  ForgotPass(){
    
  }

}
