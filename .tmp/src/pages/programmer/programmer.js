var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../about-popover/about-popover';
var ProgramPage = (function () {
    function ProgramPage(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.conferenceDate = '2047-05-17';
    }
    ProgramPage.prototype.presentPopover = function (event) {
        var popover = this.popoverCtrl.create(PopoverPage);
        popover.present({ ev: event });
    };
    ProgramPage = __decorate([
        Component({
            selector: 'page-program',template:/*ion-inline-start:"/home/damien/source/ionic/Team-VTT-Maisse/src/pages/programmer/programmer.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Course</ion-title>\n    <!--<ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>-->\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="program-header">\n    <img src="assets/img/nouvelle_course.jpg" alt="photo départ">\n  </div>\n  <div padding class="program-info">\n    <h4>Ajouter une nouvelle course</h4>\n\n    <ion-list no-lines>\n      <ion-item>\n        <ion-icon name="calendar" item-start></ion-icon>\n        <ion-label>Date</ion-label>\n        <ion-datetime displayFormat="MMM DD, YYYY" max="2056" [(ngModel)]="conferenceDate"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="pin" item-start></ion-icon>\n        <ion-label>Lieu</ion-label>\n        <ion-select>\n          <ion-option value="Buno" selected>Buno-Bonneveaux</ion-option>\n          <ion-option value="Maisse">Maisse</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <p> \n      <B> \n        <FONT size = 3>\n          Choisissez une date et un endroit pour indiquer la nouvelle course que vous allez faire avec les aux autres membres !\n        </FONT>\n      </B>\n    </p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/damien/source/ionic/Team-VTT-Maisse/src/pages/programmer/programmer.html"*/
        }),
        __metadata("design:paramtypes", [PopoverController])
    ], ProgramPage);
    return ProgramPage;
}());
export { ProgramPage };
//# sourceMappingURL=programmer.js.map