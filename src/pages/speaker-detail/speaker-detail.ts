import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ConferenceData } from '../../providers/conference-data';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-speaker-detail',
  templateUrl: 'speaker-detail.html'
})
export class SpeakerDetailPage {
  speaker: any;

  constructor(public dataProvider: ConferenceData, public navCtrl: NavController, public navParams: NavParams, private InAppBrowser: InAppBrowser) {
  }

  ionViewWillEnter() {
    this.dataProvider.load().subscribe((data: any) => {
      if (data && data.speakers) {
        for (const speaker of data.speakers) {
          if (speaker && speaker.id === this.navParams.data.speakerId) {
            this.speaker = speaker;
            break;
          }
        }
      }
    });

  }

  open(url:string){

    const options: InAppBrowserOptions = {}

    this.InAppBrowser.create(url,'_self',options);

  }

  goToSessionDetail(session: any) {
    this.navCtrl.push('SessionDetailPage', { sessionId: session.id });
  }
}
