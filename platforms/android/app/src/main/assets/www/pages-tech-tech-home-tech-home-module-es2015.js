(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tech-tech-home-tech-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tech/tech-home/tech-home.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tech/tech-home/tech-home.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"darkblue\">\n    <div class=\"header-logo-div\">\n      <img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n    </div>\n    <ion-buttons slot=\"end\">\n      <ion-button size=\"small\" shape=\"round\" color=\"light\" (click)=\"logout()\" class=\"fw600\">\n        <ion-icon name=\"log-out\"></ion-icon>\n   \t\tLOGOUT\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content class=\"ion-padding\" color=\"darkblue\">\n<!-- <div class=\"text-center\"> -->\n\t<ion-button class=\"ion-margin\" shape=\"round\" expand=\"full\" color=\"gold\" (click)=\"openTickets()\">Open Tickets</ion-button>\n\t<ion-button class=\"ion-margin\" shape=\"round\" expand=\"full\" color=\"gold\" >Closed Tickets</ion-button>\n<!-- </div> -->\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/tech/tech-home/tech-home.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/tech/tech-home/tech-home.module.ts ***!
  \**********************************************************/
/*! exports provided: TechHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechHomePageModule", function() { return TechHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tech_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tech-home.page */ "./src/app/pages/tech/tech-home/tech-home.page.ts");







const routes = [
    {
        path: '',
        component: _tech_home_page__WEBPACK_IMPORTED_MODULE_6__["TechHomePage"]
    }
];
let TechHomePageModule = class TechHomePageModule {
};
TechHomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_tech_home_page__WEBPACK_IMPORTED_MODULE_6__["TechHomePage"]]
    })
], TechHomePageModule);



/***/ }),

/***/ "./src/app/pages/tech/tech-home/tech-home.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/tech/tech-home/tech-home.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\n.header-logo-div {\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVjaC90ZWNoLWhvbWUvRDpcXFJpYXpcXE5ld0FQS1xcTmV3QVBLdjAuMS9zcmNcXGFwcFxccGFnZXNcXHRlY2hcXHRlY2gtaG9tZVxcdGVjaC1ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGVjaC90ZWNoLWhvbWUvdGVjaC1ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlY2gvdGVjaC1ob21lL3RlY2gtaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWxvZ297XHJcbiAgICB3aWR0aDoxMjBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5oZWFkZXItbG9nby1kaXZ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxufSIsIi5oZWFkZXItbG9nbyB7XG4gIHdpZHRoOiAxMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmhlYWRlci1sb2dvLWRpdiB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tech/tech-home/tech-home.page.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/tech/tech-home/tech-home.page.ts ***!
  \********************************************************/
/*! exports provided: TechHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechHomePage", function() { return TechHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");





let TechHomePage = class TechHomePage {
    constructor(navCtrl, menuCtrl, popoverCtrl, alertCtrl, modalCtrl, toastCtrl, authService, loadingCtrl, alertService) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertService = alertService;
    }
    ngOnInit() {
    }
    openTickets() {
        this.navCtrl.navigateForward('open-tickets');
    }
    closedTickets() {
        this.navCtrl.navigateForward('closed-tickets');
    }
    logout() {
        this.authService.techlogout();
        this.navCtrl.navigateRoot('/');
    }
};
TechHomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }
];
TechHomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tech-home',
        template: __webpack_require__(/*! raw-loader!./tech-home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tech/tech-home/tech-home.page.html"),
        styles: [__webpack_require__(/*! ./tech-home.page.scss */ "./src/app/pages/tech/tech-home/tech-home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
], TechHomePage);



/***/ })

}]);
//# sourceMappingURL=pages-tech-tech-home-tech-home-module-es2015.js.map