(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tech-open-tickets-open-tickets-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tech/open-tickets/open-tickets.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tech/open-tickets/open-tickets.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"darkblue\">\n    <div class=\"header-logo-div\">\n      <img src=\"assets/img/newlogov7.png\" class=\"header-logo\"/>\n    </div>\n    <ion-buttons slot=\"end\">\n      <ion-button size=\"small\" shape=\"round\" color=\"light\" (click)=\"logout()\" class=\"fw700\">\n        <ion-icon name=\"log-out\"></ion-icon>\n      LOGOUT\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar> \n</ion-header>\n\n<ion-content class=\"ion-padding\" overflow-scroll=\"true\">\n<div *ngIf=\"ticket\">\n\t<div *ngFor=\"let t of ticket\">\n\t\t<ion-button class=\"ion-margin\" expand=\"full\" color=\"dark\" (click)=\"viewTicket()\">{{t.number}} - {{t.status}}</ion-button>\n\t</div>\n</div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tech/open-tickets/open-tickets.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/tech/open-tickets/open-tickets.module.ts ***!
  \****************************************************************/
/*! exports provided: OpenTicketsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenTicketsPageModule", function() { return OpenTicketsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _open_tickets_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./open-tickets.page */ "./src/app/pages/tech/open-tickets/open-tickets.page.ts");







var routes = [
    {
        path: '',
        component: _open_tickets_page__WEBPACK_IMPORTED_MODULE_6__["OpenTicketsPage"]
    }
];
var OpenTicketsPageModule = /** @class */ (function () {
    function OpenTicketsPageModule() {
    }
    OpenTicketsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_open_tickets_page__WEBPACK_IMPORTED_MODULE_6__["OpenTicketsPage"]]
        })
    ], OpenTicketsPageModule);
    return OpenTicketsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tech/open-tickets/open-tickets.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/tech/open-tickets/open-tickets.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo {\n  width: 120px;\n  vertical-align: middle;\n}\n\n.header-logo-div {\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVjaC9vcGVuLXRpY2tldHMvRDpcXFJpYXpcXE5ld0FQS1xcTmV3QVBLdjAuMS9zcmNcXGFwcFxccGFnZXNcXHRlY2hcXG9wZW4tdGlja2V0c1xcb3Blbi10aWNrZXRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGVjaC9vcGVuLXRpY2tldHMvb3Blbi10aWNrZXRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlY2gvb3Blbi10aWNrZXRzL29wZW4tdGlja2V0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWxvZ297XHJcbiAgICB3aWR0aDoxMjBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5oZWFkZXItbG9nby1kaXZ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxufSIsIi5oZWFkZXItbG9nbyB7XG4gIHdpZHRoOiAxMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmhlYWRlci1sb2dvLWRpdiB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tech/open-tickets/open-tickets.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/tech/open-tickets/open-tickets.page.ts ***!
  \**************************************************************/
/*! exports provided: OpenTicketsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenTicketsPage", function() { return OpenTicketsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var OpenTicketsPage = /** @class */ (function () {
    function OpenTicketsPage(navCtrl, menuCtrl, popoverCtrl, alertCtrl, modalCtrl, toastCtrl, authService, loadingCtrl, alertService, router) {
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
    OpenTicketsPage.prototype.ngOnInit = function () {
        this.getTickets();
    };
    OpenTicketsPage.prototype.getTickets = function () {
        this.ticket = [
            { "number": "IGLT0010", "status": "Technician on the way" }, { "number": "IGLT0011", "status": "Processing Approval" }, { "number": "IGLT0012", "status": "Order Received" },
            { "number": "IGLT0013", "status": "open" }, { "number": "IGLT00114", "status": "open" }, { "number": "IGLT0015", "status": "open" }
        ];
    };
    OpenTicketsPage.prototype.viewTicket = function (t) {
        this.navCtrl.navigateForward('ticket-detail');
    };
    OpenTicketsPage.prototype.logout = function () {
        this.authService.techlogout();
        this.navCtrl.navigateRoot('/');
    };
    OpenTicketsPage.ctorParameters = function () { return [
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
    ]; };
    OpenTicketsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-open-tickets',
            template: __webpack_require__(/*! raw-loader!./open-tickets.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tech/open-tickets/open-tickets.page.html"),
            styles: [__webpack_require__(/*! ./open-tickets.page.scss */ "./src/app/pages/tech/open-tickets/open-tickets.page.scss")]
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
    ], OpenTicketsPage);
    return OpenTicketsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tech-open-tickets-open-tickets-module-es5.js.map