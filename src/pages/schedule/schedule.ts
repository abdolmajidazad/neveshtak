import { Component, ViewChild } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { AlertController, App,  List, ModalController, NavController } from 'ionic-angular';


/*
  To learn how to use third party libs in an
  Ionic app check out our docs here: http://ionicframework.com/docs/v2/resources/third-party-libs/
*/
//import moment from 'moment';

import { ConferenceData } from '../../providers/conference-data';
//import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
//import { SessionDetailPage } from '../session-detail/session-detail';
import { UserData } from '../../providers/user-data';
import { PopoverPage } from '../schedule-popover/schedule-popover';
//import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {
  // the list is a child of the schedule page
  // @ViewChild('scheduleList') gets a reference to the list
  // with the variable #scheduleList, `read: List` tells it to return
  // the List and not a reference to the element
  @ViewChild('scheduleList', { read: List }) scheduleList: List;

  dayIndex = 0;
  queryText = '';
  segment = 'all';
  excludeTracks = [];
  shownSessions: any = [];
  groups = [];
  confDate: string;
  pet: string = 'puppies';
  subCat = 'hide';
  selectedCat = '';
  json = {};
  titleCat = '';

  constructor(
    public alertCtrl: AlertController,
    public app: App,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public confData: ConferenceData,
    public user: UserData,
    public popoverCtrl: PopoverController

  ) {

  }
  ionViewDidLoad() {
    //this.app.setTitle('Schedule');
    this.updateSchedule('Timeline');
  }


  updateSchedule(data) {
    console.log(data)
    this.segment = data
    this.shownSessions = data;

    // Close any open sliding items when the schedule updates
    //this.scheduleList && this.scheduleList.closeSlidingItems();
    //
    //this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe(data => {
    //  let timestamp = data.date;
    //
    //  /*
    //    To learn how to use third party libs in an
    //    Ionic app check out our docs here: http://ionicframework.com/docs/v2/resources/third-party-libs/
    //  */
    //  this.confDate = moment(timestamp).format('MM/DD/YYYY');
    //  this.shownSessions = data.shownSessions;
    //  this.groups = data.groups;
    //});
  }
  //
  //presentFilter() {
  //  let modal = this.modalCtrl.create(ScheduleFilterPage, this.excludeTracks);
  //  modal.present();
  //
  //  modal.onWillDismiss((data: any[]) => {
  //    if (data) {
  //      this.excludeTracks = data;
  //      this.updateSchedule();
  //    }
  //  });
  //
  //}

  //goToSessionDetail(sessionData) {
  //  // go to the session detail page
  //  // and pass in the session data
  //  this.navCtrl.push(SessionDetailPage, sessionData);
  //}
  //
  //addFavorite(slidingItem: ItemSliding, sessionData) {
  //
  //  if (this.user.hasFavorite(sessionData.name)) {
  //    // woops, they already favorited it! What shall we do!?
  //    // prompt them to remove it
  //    this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
  //  } else {
  //    // remember this session as a user favorite
  //    this.user.addFavorite(sessionData.name);
  //
  //    // create an alert instance
  //    let alert = this.alertCtrl.create({
  //      title: 'Favorite Added',
  //      buttons: [{
  //        text: 'OK',
  //        handler: () => {
  //          // close the sliding item
  //          slidingItem.close();
  //        }
  //      }]
  //    });
  //    // now present the alert on top of all other content
  //    alert.present();
  //  }
  //
  //}
  //
  //removeFavorite(slidingItem: ItemSliding, sessionData, title) {
  //  let alert = this.alertCtrl.create({
  //    title: title,
  //    message: 'Would you like to remove this session from your favorites?',
  //    buttons: [
  //      {
  //        text: 'Cancel',
  //        handler: () => {
  //          // they clicked the cancel button, do not remove the session
  //          // close the sliding item and hide the option buttons
  //          slidingItem.close();
  //        }
  //      },
  //      {
  //        text: 'Remove',
  //        handler: () => {
  //          // they want to remove this session from their favorites
  //          this.user.removeFavorite(sessionData.name);
  //          this.updateSchedule();
  //
  //          // close the sliding item and hide the option buttons
  //          slidingItem.close();
  //        }
  //      }
  //    ]
  //  });
  //  // now present the alert on top of all other content
  //  alert.present();
  //}


  //onHome(form) {
  //  this.navCtrl.pop(ProfilePage);
    //this.submitted = true;

    // if (form.valid) {
    //   this.userData.signup(this.signup.username);
    //   this.navCtrl.push(TabsPage);
    // }
  //}

  presentPopover(event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ ev: event });
  }

  subCategory(status, data, title){
    console.log("mmamamamamamma")
    this.subCat = status;
    this.titleCat = title;

    this.json = {
      cat1 : [
        {
          'title' : 'Category 1.1',
          'image' : 'assets/img/speakers/eagle.jpg',
          'description' : "Upload 4 hour age by apz",
          'count' : 54
        },
        {
          'title' : 'Category 1.2',
          'image' : 'assets/img/speakers/bear.jpg',
          'description' : "Upload 6 hour age by apz",
          'count' : 634
        }
      ],
      cat2 : [
        {
          'title' : 'Category 2.1',
          'image' : 'assets/img/speakers/cheetah.jpg',
          'description' : "Upload 5 hour age by ama",
          'count' : 1003
        },
        {
          'title' : 'Category 2.2',
          'image' : 'assets/img/speakers/puppy.jpg',
          'description' : "Upload 7 hour age by ama",
          'count' : 123
        },
        {
          'title' : 'Category 2.2',
          'image' : 'assets/img/speakers/rabbit.jpg',
          'description' : "Upload yesterday by apz",
          'count' : 5323
        }
      ],
      cat3 : [
        {
          'title' : 'Category 3.1',
          'image' : 'assets/img/speakers/turtle.jpg',
          'description' : "Upload 4 hour age by srh",
          'count' : 45
        },
        {
          'title' : 'Category 3.2',
          'image' : 'assets/img/speakers/iguana.jpg',
          'description' : "Upload 9 hour age by srh",
          'count' : 5323
        }
      ],
      cat4 : [
        {
          'title' : 'Category 4.1',
          'image' : 'assets/img/speakers/eagle.jpg',
          'description' : "Upload 5 hour age by mgs"
        },
        {
          'title' : 'Category 4.2',
          'image' : 'assets/img/speakers/cheetah.jpg',
          'description' : "Upload yesterday by mgs",
          'count' :32
        }
      ]
    }
    this.selectedCat = this.json[data];
  }
}
