(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cons-cons-profile-cons-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cons/cons-profile/cons-profile.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cons/cons-profile/cons-profile.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n     <div class=\"logo-in\"></div>\n    <ion-buttons slot=\"end\">\n      <ion-button size=\"small\" shape=\"round\" color=\"light\" (click)=\"logout()\" class=\"fw700\">\n        <ion-icon name=\"log-out\"></ion-icon>\n   \t\tLOGOUT\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" color=\"light\">\n\n\t<h1 class=\"text-center fw800\" style=\"color:red\">PROFILE</h1>\n\t<div class=\"text-center\">\n\t\t<img src=\"assets/img/avatar.png\">\n\t</div>\n\t<div *ngFor=\"let u of user\">\n\t<ion-row>\n\t\t<ion-col><h5 class=\"fw800\">NAME</h5></ion-col>\n\t\t<ion-col><h4 class=\"fw800 text12\">{{u.name}}</h4></ion-col>\n\t</ion-row>\n\t<ion-row>\n\t\t<ion-col><h5 class=\"fw800\">CONSULTANT CODE</h5></ion-col>\n\t\t<ion-col><h4 class=\"fw800 text12\">{{u.code}}</h4></ion-col>\n\t</ion-row>\n\t<ion-row>\n\t\t<ion-col><h5 class=\"fw800\">MOBILE NUMBER</h5></ion-col>\n\t\t<ion-col><h4 class=\"fw800 text12\">{{u.phone}}</h4></ion-col>\n\t</ion-row>\n\t<br>\n\t<div class=\"text-center\">\n\t\t<ion-button shape=\"round\" color=\"light\" (click)=\"changePass()\" class=\"ion-margin\">Change Password</ion-button>\n\t</div>\n\t</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cons/cons-profile/cons-profile.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/cons/cons-profile/cons-profile.module.ts ***!
  \****************************************************************/
/*! exports provided: ConsProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsProfilePageModule", function() { return ConsProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cons_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cons-profile.page */ "./src/app/pages/cons/cons-profile/cons-profile.page.ts");







const routes = [
    {
        path: '',
        component: _cons_profile_page__WEBPACK_IMPORTED_MODULE_6__["ConsProfilePage"]
    }
];
let ConsProfilePageModule = class ConsProfilePageModule {
};
ConsProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_cons_profile_page__WEBPACK_IMPORTED_MODULE_6__["ConsProfilePage"]]
    })
], ConsProfilePageModule);



/***/ }),

/***/ "./src/app/pages/cons/cons-profile/cons-profile.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/cons/cons-profile/cons-profile.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  height: 128px;\n  width: 128px;\n  border-radius: 50%;\n  border: solid 4px #000;\n  display: inline;\n  box-shadow: 0 0 28px rgba(255, 255, 255, 0.65);\n}\n\nh4 {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29ucy9jb25zLXByb2ZpbGUvRDpcXFJpYXpcXE5ld0FQS1xcTmV3QVBLdjAuMS9zcmNcXGFwcFxccGFnZXNcXGNvbnNcXGNvbnMtcHJvZmlsZVxcY29ucy1wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29ucy9jb25zLXByb2ZpbGUvY29ucy1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNPLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSw4Q0FBQTtBQ0NSOztBREdBO0VBQ0MsVUFBQTtBQ0FEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29ucy9jb25zLXByb2ZpbGUvY29ucy1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiBpbWcge1xyXG4gICAgICAgIGhlaWdodDogMTI4cHg7XHJcbiAgICAgICAgd2lkdGg6IDEyOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDRweCAjMDAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMjhweCByZ2JhKDI1NSwyNTUsMjU1LCAuNjUpO1xyXG4gIFxyXG4gICAgICB9XHJcblxyXG5oNHtcclxuXHRjb2xvcjpyZWQ7XHJcbn0iLCJpbWcge1xuICBoZWlnaHQ6IDEyOHB4O1xuICB3aWR0aDogMTI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiBzb2xpZCA0cHggIzAwMDtcbiAgZGlzcGxheTogaW5saW5lO1xuICBib3gtc2hhZG93OiAwIDAgMjhweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjUpO1xufVxuXG5oNCB7XG4gIGNvbG9yOiByZWQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/cons/cons-profile/cons-profile.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/cons/cons-profile/cons-profile.page.ts ***!
  \**************************************************************/
/*! exports provided: ConsProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsProfilePage", function() { return ConsProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ConsProfilePage = class ConsProfilePage {
    constructor(navCtrl, loadingCtrl, toastCtrl, authService, alertService, alertCtrl, router) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.alertService = alertService;
        this.alertCtrl = alertCtrl;
        this.router = router;
    }
    ngOnInit() {
        this.profile();
    }
    profile() {
        this.authService.consProfile().subscribe(data => {
            console.log(data);
            this.user = data['message'];
            console.log(this.user);
        });
    }
    changePass() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const changePass = yield this.alertCtrl.create({
                header: 'Enter Your Old & New Password',
                // message: 'Enter your Support Query below',
                inputs: [
                    {
                        name: 'oldpass',
                        placeholder: 'Old Password',
                        type: 'password'
                    },
                    {
                        name: 'newpass',
                        placeholder: 'New Password',
                        type: 'password'
                    },
                    {
                        name: 'confirmnewpass',
                        placeholder: 'Confirm New Password',
                        type: 'password'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        handler: data => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'submit',
                        handler: (data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            if (data.newpass == data.confirmnewpass) {
                                const loader = yield this.loadingCtrl.create({
                                    duration: 1000
                                });
                                loader.present();
                                loader.onWillDismiss().then((l) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                    console.log(data);
                                    this.authService.consChangePass(data).subscribe(result => {
                                        if (result['response']) {
                                            console.log(result);
                                            this.alertService.presentToast(result['message']);
                                        }
                                        else {
                                            console.log(result);
                                            this.alertService.presentToast(result['message']);
                                        }
                                    });
                                }));
                            }
                            else {
                                this.alertService.presentToast('New password does not match!');
                            }
                        })
                    }
                ]
            });
            changePass.present();
        });
    }
    logout() {
        this.authService.logout();
        this.navCtrl.navigateRoot('/');
    }
};
ConsProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ConsProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cons-profile',
        template: __webpack_require__(/*! raw-loader!./cons-profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cons/cons-profile/cons-profile.page.html"),
        styles: [__webpack_require__(/*! ./cons-profile.page.scss */ "./src/app/pages/cons/cons-profile/cons-profile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], ConsProfilePage);



/***/ })

}]);
//# sourceMappingURL=pages-cons-cons-profile-cons-profile-module-es2015.js.map