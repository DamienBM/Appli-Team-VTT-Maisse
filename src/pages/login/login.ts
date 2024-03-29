import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { TabsPage } from '../tabs-page/tabs-page';
import { SignupPage } from '../signup/signup';

import { FTP } from '@ionic-native/ftp';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(public navCtrl: NavController, 
              public userData: UserData,
              public InAppBrowser: InAppBrowser,
              public FTP: FTP,
              private localNotifications: LocalNotifications
            ) { }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username);
      this.navCtrl.push(TabsPage);
    }
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }

  open(url: string){

    const options : InAppBrowserOptions = {}

    this.InAppBrowser.create(url,'_self',options);

  }

  /*this.FTP.connect("url","user","mdp"); */

  // pour les notifs
  /*this.localNotifications.schedule({
    text: 'Delayed ILocalNotification',
    at: new Date(new Date().getTime() + 3600),
    led: 'FF0000',
    sound: isAndroid ? 'file://sound.mp3': 'file://beep.caf'
 });*/

}
