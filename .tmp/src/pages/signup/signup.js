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
import { NavController } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { TabsPage } from '../tabs-page/tabs-page';
import { InAppBrowser } from '@ionic-native/in-app-browser';
var SignupPage = (function () {
    function SignupPage(navCtrl, userData, InAppBrowser) {
        this.navCtrl = navCtrl;
        this.userData = userData;
        this.InAppBrowser = InAppBrowser;
        this.signup = { username: '', password: '' };
        this.submitted = false;
    }
    SignupPage.prototype.onSignup = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.userData.signup(this.signup.username);
            this.navCtrl.push(TabsPage);
        }
    };
    SignupPage.prototype.open = function (url) {
        var options = {};
        this.InAppBrowser.create(url, '_self', options);
    };
    SignupPage = __decorate([
        Component({
            selector: 'page-user',template:/*ion-inline-start:"/home/damien/source/ionic/Team-VTT-Maisse/src/pages/signup/signup.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Inscription</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content class="login-page">\n\n	<div class="logo">\n		<img src="assets/img/VTT.jpg" alt="Logo-VTT-Maisse" width="300" height="300"/>\n	</div>\n\n	<form #signupForm="ngForm" novalidate>\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label stacked color="primary">Nom d\'utilisateur</ion-label>\n				<ion-input [(ngModel)]="signup.username" name="username" type="text" #username="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="username.valid || submitted == false" color="danger" padding-left>\n				Nom d\'utilisateur requis !\n			</p>\n\n			<ion-item>\n				<ion-label stacked color="primary">Mot de Passe </ion-label>\n				<ion-input [(ngModel)]="signup.password" name="password" type="password" #password="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n				Mot de passe requis !\n			</p>\n		</ion-list>\n\n		<div padding>\n			<button ion-button (click)="onSignup(signupForm)" type="submit" block>Inscription</button>\n		</div>\n	</form>\n\n	<ion-fab bottom right #fab4>\n		<button ion-fab><ion-icon name="arrow-dropup"></ion-icon></button>\n		<ion-fab-list side="top">\n		  <button ion-fab color="google" (click)="open(\'http://www.teamvttmaisse.org/forum/portal.php\')"><ion-icon name="bicycle"></ion-icon></button>\n		  <button ion-fab color="facebook" (click)="open(\'https://www.facebook.com/teamvttmaisse/\')"><ion-icon name="logo-facebook"></ion-icon></button>\n		</ion-fab-list>\n	</ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/home/damien/source/ionic/Team-VTT-Maisse/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [NavController, UserData, InAppBrowser])
    ], SignupPage);
    return SignupPage;
}());
export { SignupPage };
//# sourceMappingURL=signup.js.map