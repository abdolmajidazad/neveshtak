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
  endLevelData = '';
  endLevelDataStatus = false;
  tagSelected ='';
  subTag = false;

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


  tagsSet(){
    this.endLevelDataStatus = false;
    this.subCat = 'hide';
    this.subTag = false;
  }
  categorySet(){
    this.endLevelDataStatus = false;
    this.subCat = 'hide';
    this.subTag = false;
  }
  userSet(){
    this.endLevelDataStatus = false;
    this.subCat = 'hide';
    this.subTag = false;
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


  public tagsData= [
    {
      'id' :2,
      'title' : 'Hashtag 1',
      'image' : 'assets/img/neveshtaks/1.jpg',
      'description' : "6 hour age",
      'count' : 634,
      'owner' : 'apz',
      'imageOwner' : 'assets/img/speakers/andrew.jpg'
    },
    {
      'id' :3,
      'title' : 'Hashtag 2',
      'image' : 'assets/img/neveshtaks/2.jpg',
      'description' : "5 hour age",
      'count' : 1003,
      'owner' : 'AMA',
      'imageOwner' : 'assets/img/speakers/majid.jpg'
    },
    {
      'id' :4,
      'title' : 'Hashtag 3',
      'image' : 'assets/img/neveshtaks/3.jpg',
      'description' : "9 hour age",
      'count' : 5323,
      'owner' : 'Srh',
      'imageOwner' : 'assets/img/speakers/ray.jpg'
    },{
      'id' :9,
      'title' : 'Hashtag 4',
      'image' : 'assets/img/neveshtaks/4.jpg',
      'description' : "yesterday",
      'count' :32,
      'owner' : 'mgs',
      'imageOwner' : 'assets/img/speakers/steve.jpg'
    }
  ];

  getTagData(data){
    this.tagSelected = data;
    this.subTag = true;
  }

  subTagBack(){
    this.subTag = false;
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
    this.subTag = false;
    console.log("status, data, title : ", status, data, title)
    this.subCat = status;
    this.titleCat = title;
    this.endLevelDataStatus = false;

    this.json = {
      cat1 : [
        {
          'id' :1,
          'category' : 'cat1',
          'title' : 'Category 1.1',
          'image' : 'assets/img/neveshtaks/5.jpg',
          'description' : "4 hour age",
          'count' : 54,
          'owner' : 'apz',
          'imageOwner' : 'assets/img/speakers/andrew.jpg'

        },
        {
          'id' :2,
          'category' : 'cat1',
          'title' : 'Category 1.2',
          'image' : 'assets/img/neveshtaks/6.jpg',
          'description' : "6 hour age",
          'count' : 634,
          'owner' : 'apz',
          'imageOwner' : 'assets/img/speakers/andrew.jpg'
        }
      ],
      cat2 : [
        {
          'category' : 'cat2',
          'id' :3,
          'title' : 'Category 2.1',
          'image' : 'assets/img/neveshtaks/7.jpg',
          'description' : "5 hour age",
          'count' : 1003,
          'owner' : 'AMA',
          'imageOwner' : 'assets/img/speakers/majid.jpg'
        },
        {
          'category' : 'cat2',
          'id' :4,
          'title' : 'Category 2.2',
          'image' : 'assets/img/neveshtaks/8.jpg',
          'description' : "7 hour age",
          'count' : 123,
          'owner' : 'AMA',
          'imageOwner' : 'assets/img/speakers/majid.jpg'
        },
        {
          'category' : 'cat2',
          'id' :5,
          'title' : 'Category 2.2',
          'image' : 'assets/img/neveshtaks/9.jpg',
          'description' : "yesterday",
          'count' : 5323,
          'owner' : 'apz',
          'imageOwner' : 'assets/img/speakers/andrew.jpg'
        }
      ],
      cat3 : [
        {
          'category' : 'cat3',
          'id' :6,
          'title' : 'Category 3.1',
          'image' : 'assets/img/neveshtaks/10.jpg',
          'description' : "4 hour age",
          'count' : 45,
          'owner' : 'Srh',
          'imageOwner' : 'assets/img/speakers/ray.jpg'
        },
        {
          'category' : 'cat3',
          'id' :7,
          'title' : 'Category 3.2',
          'image' : 'assets/img/neveshtaks/11.jpg',
          'description' : "9 hour age",
          'count' : 5323,
          'owner' : 'Srh',
          'imageOwner' : 'assets/img/speakers/ray.jpg'
        }
      ],
      cat4 : [
        {
          'category' : 'cat4',
          'id' :8,
          'title' : 'Category 4.1',
          'image' : 'assets/img/neveshtaks/12.jpg',
          'description' : "5 hour age",
          'count' : 589,
          'owner' : 'mgs',
          'imageOwner' : 'assets/img/speakers/steve.jpg'
        },
        {
          'category' : 'cat4',
          'id' :9,
          'title' : 'Category 4.2',
          'image' : 'assets/img/neveshtaks/13.png',
          'description' : "yesterday",
          'count' :32,
          'owner' : 'mgs',
          'imageOwner' : 'assets/img/speakers/steve.jpg'
        }
      ]
    };
    this.selectedCat = this.json[data];
  }
  getData(data){
    console.log(data)
    this.endLevelDataStatus = true;
    this.endLevelData = data;

    console.log("this.endLevelDataStatus : ", this.endLevelDataStatus)
  }

}
