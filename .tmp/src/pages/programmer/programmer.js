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
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { PopoverPage } from '../about-popover/about-popover';
var ProgramPage = (function () {
    function ProgramPage(popoverCtrl, InAppBrowser) {
        this.popoverCtrl = popoverCtrl;
        this.InAppBrowser = InAppBrowser;
        this.conferenceDate = '2047-05-17';
    }
    ProgramPage.prototype.presentPopover = function (event) {
        var popover = this.popoverCtrl.create(PopoverPage);
        popover.present({ ev: event });
    };
    ProgramPage.prototype.open = function (url) {
        var options = {};
        this.InAppBrowser.create(url, '_self', options);
    };
    ProgramPage = __decorate([
        Component({
            selector: 'page-program',template:/*ion-inline-start:"/home/damien/source/ionic/Team-VTT-Maisse/src/pages/programmer/programmer.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Course</ion-title>\n    <!--<ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>-->\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-fab bottom right #fab4>\n      <button ion-fab><ion-icon name="arrow-dropup"></ion-icon></button>\n      <ion-fab-list side="top">\n        <button ion-fab color="google" (click)="open(\'http://www.teamvttmaisse.org/forum/portal.php\')"><ion-icon name="bicycle"></ion-icon></button>\n        <button ion-fab color="facebook" (click)="open(\'https://www.facebook.com/teamvttmaisse/\')"><ion-icon name="logo-facebook"></ion-icon></button>\n      </ion-fab-list>\n  </ion-fab>\n\n  <div class="program-header">\n    <img src="assets/img/nouvelle_course.jpg" alt="photo départ">\n  </div>\n  <div padding class="program-info">\n    <h4>Ajouter une nouvelle course</h4>\n\n    <ion-list no-lines>\n      <ion-item>\n        <ion-icon name="calendar" item-start></ion-icon>\n        <ion-label>Date</ion-label>\n        <ion-datetime displayFormat="MMM DD, YYYY" max="2056" [(ngModel)]="conferenceDate"></ion-datetime>\n      </ion-item>\n\n      <!-- Rajouter ici zone d\'input à la main pour infos (id "info" dans data.json) de la sortie -->\n\n      <!-- Rajouter ion-input comme dans page login afin de gérer les lieux via google maps ... A voir  -->\n\n      <ion-item>\n        <ion-icon name="settings" item-start></ion-icon>\n        <ion-label>Catégorie</ion-label>\n        <ion-select>\n          <ion-option value="Rando" selected>Rando</ion-option>\n          <ion-option value="Course">Course</ion-option>\n          <ion-option value="Entrainement">Entrainement</ion-option>\n          <ion-option value="Autre">Autre</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <!-- Rajouter infos de temps (début -> fin)  -->\n\n    <!-- Rajouter ici les infos à rentrer à la main pour la course (infos générales) -->\n\n    <p> \n      <B> \n        <FONT size = 3>\n          Choisissez une date et un endroit pour indiquer la nouvelle course que vous allez faire avec les autres membres !\n        </FONT>\n      </B>\n    </p>\n  </div>\n\n  \n\n</ion-content>'/*ion-inline-end:"/home/damien/source/ionic/Team-VTT-Maisse/src/pages/programmer/programmer.html"*/
        }),
        __metadata("design:paramtypes", [PopoverController, InAppBrowser])
    ], ProgramPage);
    return ProgramPage;
}());
export { ProgramPage };
//# sourceMappingURL=programmer.js.map