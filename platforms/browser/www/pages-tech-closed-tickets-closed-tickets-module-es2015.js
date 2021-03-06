(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tech-closed-tickets-closed-tickets-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tech/closed-tickets/closed-tickets.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tech/closed-tickets/closed-tickets.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n        <div class=\"logo-in\"></div>\n    <ion-buttons slot=\"end\">\n      <ion-button size=\"small\" shape=\"round\" color=\"light\" (click)=\"logout()\" class=\"fw700\">\n        <ion-icon name=\"log-out\"></ion-icon>\n      LOGOUT\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar> \n</ion-header>\n\n<ion-content>\n\n\t<div *ngFor=\"let t of ticket\">\n\t\t<ion-button class=\"ion-margin\" expand=\"full\" color=\"dark\" (click)=\"viewTicket(t)\">{{t.number}}</ion-button>\n\t</div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tech/closed-tickets/closed-tickets.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/tech/closed-tickets/closed-tickets.module.ts ***!
  \********************************************************************/
/*! exports provided: ClosedTicketsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClosedTicketsPageModule", function() { return ClosedTicketsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _closed_tickets_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./closed-tickets.page */ "./src/app/pages/tech/closed-tickets/closed-tickets.page.ts");







const routes = [
    {
        path: '',
        component: _closed_tickets_page__WEBPACK_IMPORTED_MODULE_6__["ClosedTicketsPage"]
    }
];
let ClosedTicketsPageModule = class ClosedTicketsPageModule {
};
ClosedTicketsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_closed_tickets_page__WEBPACK_IMPORTED_MODULE_6__["ClosedTicketsPage"]]
    })
], ClosedTicketsPageModule);



/***/ }),

/***/ "./src/app/pages/tech/closed-tickets/closed-tickets.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/tech/closed-tickets/closed-tickets.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlY2gvY2xvc2VkLXRpY2tldHMvY2xvc2VkLXRpY2tldHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/tech/closed-tickets/closed-tickets.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/tech/closed-tickets/closed-tickets.page.ts ***!
  \******************************************************************/
/*! exports provided: ClosedTicketsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClosedTicketsPage", function() { return ClosedTicketsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ClosedTicketsPage = class ClosedTicketsPage {
    constructor(navCtrl, menuCtrl, popoverCtrl, alertCtrl, modalCtrl, toastCtrl, authService, loadingCtrl, alertService, router) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertService = alertService;
        this.router = router;
    }
    ngOnInit() {
        this.getTickets();
    }
    getTickets() {
        var body = '';
        this.authService.closedTickets(body).subscribe(data => {
            console.log(data);
            this.ticket = data['message'];
        });
    }
    viewTicket(t) {
        let navigationExtras = {
            state: {
                t: t
            }
        };
        this.router.navigate(['closed-ticket-detail'], navigationExtras);
        console.log(t);
    }
    logout() {
        this.authService.techlogout();
        this.navCtrl.navigateRoot('/');
    }
};
ClosedTicketsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ClosedTicketsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-closed-tickets',
        template: __webpack_require__(/*! raw-loader!./closed-tickets.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tech/closed-tickets/closed-tickets.page.html"),
        styles: [__webpack_require__(/*! ./closed-tickets.page.scss */ "./src/app/pages/tech/closed-tickets/closed-tickets.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], ClosedTicketsPage);



/***/ })

}]);
//# sourceMappingURL=pages-tech-closed-tickets-closed-tickets-module-es2015.js.map