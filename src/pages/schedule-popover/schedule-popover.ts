import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
@Component({
  template: `
    <ion-list>
      <button ion-item (click)="close('http://ionicframework.com/docs/v2/getting-started')">Item 1</button>
      <button ion-item (click)="close('http://ionicframework.com/docs/v2')">Item 2</button>
      <button ion-item (click)="close('http://showcase.ionicframework.com')">Item 3</button>
      <button ion-item (click)="close('https://github.com/driftyco/ionic')">Item 4</button>
    </ion-list>
  `
})
export class PopoverPage {
  constructor(
    public viewCtrl: ViewController
  ) { }
  close(url: string) {
    window.open(url, '_blank');
    this.viewCtrl.dismiss();
  }
}
