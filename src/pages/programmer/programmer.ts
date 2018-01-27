import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

import { PopoverPage } from '../about-popover/about-popover';

@Component({
  selector: 'page-program',
  templateUrl: 'programmer.html'
})
export class ProgramPage {
  conferenceDate = '2047-05-17';

  constructor(public popoverCtrl: PopoverController, private InAppBrowser: InAppBrowser) { }

  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ ev: event });
  }

  open(url: string) {
    const options: InAppBrowserOptions = {}
  
    this.InAppBrowser.create(url,'_self',options);
  }
}
