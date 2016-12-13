import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SchedulePage } from '../schedule/schedule';
import { UserData } from '../../providers/user-data';


@Component({
  selector: 'page-user',
  templateUrl: 'signup.html'
})
export class SignupPage {
  signup: {username?: string, password?: string, name?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController, public userData: UserData) {}

  goTutorial() {
    this.navCtrl.pop(SignupPage);
  }

  onSignup() {
      this.navCtrl.push(SchedulePage);
    //this.submitted = true;

    // if (form.valid) {
    //   this.userData.signup(this.signup.username);
    //   this.navCtrl.push(TabsPage);
    // }
  }
}
